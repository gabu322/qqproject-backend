const {DataTypes} = require("sequelize");
const sequelize = require("../config/sequelize");

const Vacation = sequelize.define("vacation", {
    employeeId: DataTypes.INTEGER,
    requestDate: DataTypes.DATE,
    startDate: DataTypes.DATEONLY,
    endDate: DataTypes.DATEONLY,
    state: DataTypes.STRING,
    description: DataTypes.STRING
})

module.exports = Vacation;
