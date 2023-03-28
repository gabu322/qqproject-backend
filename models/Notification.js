const {DataTypes} = require("sequelize");
const sequelize = require("../config/sequelize");

const Vacation = sequelize.define("vacation", {
    employeeId: DataTypes.INTEGER,
    sentDate: DataTypes.DATE,
    state: DataTypes.STRING,
    text: DataTypes.STRING
})

module.exports = Vacation;
