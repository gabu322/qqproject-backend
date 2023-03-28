const express = require("express");
const routes = require("./routes");
require("../config/associations");

const app = express();
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use(express.json());
app.use(routes);

app.listen(3001, () => {
    console.log("Server working on port 3001");
});
