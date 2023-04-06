const {DataTypes} = require("sequelize");
const sequelize = require("../config/sequelize");

const Notification = sequelize.define("notification", {
    employeeId: DataTypes.INTEGER,
    sentDate: DataTypes.DATEONLY,
    state: DataTypes.STRING,
    text: DataTypes.STRING
})

module.exports = Notification;
