const Employee = require('../models/Employees');

module.exports = {
    async registerEmployee(req, res) {
        const employee = await Employee.create(req.body);
        return res.json(employee);
    },
    async getAllEmployees(req, res) {
        const employees = await Employee.findAll();
        return res.json(employees);
    },
    async getCurrentEmployee(req, res) {
        await Employee.update(req.body,
            {
                where: {
                    employeeId: req.params.employeeId
                }
            }
        );
        return res.send("Funcionário cadastrado com sucesso");
    },
    async getManagers(req, res) {
        const employees = await Employee.findAll({
            where: { isManager: true }
        })
        return res.json(employees);
    },
    async getManagerByName(req, res) {
        const employees = await Employee.findOne({
            where: { name: req.params.name }
        });
        return res.json(employees);
    },
    async getEmployeeByEmail(req, res) {
        const employee = await Employee.findOne({
            where: { businessEmail: req.params.businessEmail }
        });
        return res.json(employee);
    },
    async getEmployeeByRegistration(req, res) {
        const employee = await Employee.findOne({
            where: { employeeId: req.params.employeeId }
        });
        return res.json(employee);
    },
    async getEmployeeByManager(req, res) {
        const employee = await Employee.findAll({
            where: { managerId: req.params.managerId }
        });
        return res.json(employee);
    },
    async getEmployeeById(req, res) {
        const employee = await Employee.findOne({
            where: { id: req.params.id }
        });
        return res.json(employee);
    },

}
