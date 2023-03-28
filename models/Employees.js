const {DataTypes} = require("sequelize");
const sequelize = require("../config/sequelize");

const Employees = sequelize.define("employees", {
    employeeId: DataTypes.STRING,
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    cpf_cnpj: DataTypes.STRING,
    businessEmail: DataTypes.STRING,
    personalEmail: DataTypes.STRING,
    contractType: DataTypes.STRING,
    managerId: DataTypes.INTEGER,
    isManager: DataTypes.BOOLEAN,
    permissionEditEmployeeRegistration: DataTypes.BOOLEAN,
    lastThirtheenth: DataTypes.DATEONLY,
    vacationDaysLeft: DataTypes.INTEGER,
    admissionDate: DataTypes.DATEONLY
})

module.exports = Employees;
