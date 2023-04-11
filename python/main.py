import requests
import smtplib
import psycopg2
import pandas as pd

from email.mime.text import MIMEText
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

token= 'token removido para a postagem no github e gitlab'

headers = {
    'Authorization': f'Bearer {token}',
    'Content-Type': 'application/json'
}

class VacationInfo(BaseModel):
    name: str
    start: str
    end: str

app = FastAPI()



app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins
    allow_credentials=False,
    allow_methods=["*"],  # Allow all methods
    allow_headers=["*"],  # Allow all headers
)

@app.get("/")
async def root():
    return {"message": token}

@app.post("/workplace")
async def workplaceNotification(vacationInfo: VacationInfo):
    try:
        workplaceUrl = 'https://graph.facebook.com/v4.0/me/messages'
        workplaceData = {
                "messaging_type": "UPDATE",
                "recipient": {
                    "id": 100089031168902
                },
                "message": {
                    "text": f"Solicitação de férias\nO funcionário '{vacationInfo.name}' fez uma solicitação de férias, com início em {vacationInfo.start} e fim em {vacationInfo.end}, entre no sistema de gerenciamento de férias para aprovar ou recusar"
                }
            }
        requests.post(workplaceUrl, headers=headers, json=workplaceData)
        return {"status": 200, "message": "Notificação enviada para o workplace do gerente"}
    except (Exception) as error:
        return {'status': 400, 'message': error}

@app.post("/email")
async def emailNotification(vacationInfo: VacationInfo):
    try:
        textBody = f"Solicitação de férias\nO funcionário '{vacationInfo.name}' fez uma solicitação de férias, com início em {vacationInfo.start} e fim em {vacationInfo.end}, entre no sistema de gerenciamento de férias para aprovar ou recusar"

        msg = MIMEText(textBody, "html")

        #senderEmail = 'gabrieldallorto@hotmail.com'
        #password = ""
        host = '10.0.0.241'
        port = 25
        emailDe = 'qqtech-alunos@quero-quero.com.br'
        emailPara = 'gabrieldallorto@hotmail.com'

        msg['Subject'] = "Solicitação de férias"
        msg['From'] = emailDe
        msg['To'] = emailPara

        s = smtplib.SMTP(host, port)
        s.ehlo()
        s.sendmail(emailDe, emailPara, msg.as_string())
        s.quit()

        return {'status': 200, 'message': 'Email enviado para o email institucional do gerente'}
    except (Exception) as error:
        return {'status': 400, 'message': error}


@app.get("/generateReport")
def download_csv():
    conn = psycopg2.connect(
        host="127.0.0.1",
        database="postgres",
        user="postgres",
        password="postgres"
    )

    query = "SELECT vacationreport.id as id, employees.name as \"Nome\", vacationreport.startDate as \"Começo das férias\", vacationreport.endDate as \"Fim das férias\", vacationreport.description as \"Descrição\", vacationreport.state as \"Estado\" FROM vacationreport JOIN employees ON vacationreport.employeeId = employees.id"
    df = pd.read_sql(query, conn)
    print(df)
    conn.close()
    return df.to_csv(sep=';')
