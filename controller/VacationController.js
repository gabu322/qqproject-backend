const Vacation = require("../models/Vacation")
const { Op } = require("sequelize");
module.exports = {
    async createVacationRequest(req, res) {
        const vacation = await Vacation.create(req.body);
        return res.json(vacation);
    },
    async getVacationsByEmployee(req, res) {
        const vacations = await Vacation.findAll({
            where: {
                employeeId: req.params.employeeId,
                //[Op.not]: {state: 'Denied'}
            }
        })
        return res.json(vacations)
    },
    async updateVacationsById(req, res) {
        await Vacation.update(req.body,
            {
                where: {
                    id: req.params.id
                }
            }
        );
        return res.send("Férias atualizada com sucesso");
    },
}
