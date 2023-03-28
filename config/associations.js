const Employee = require("../models/Employees");
const Notifications = require("../models/Notification");
const Vacations = require("../models/Vacation")

Employee.hasOne(Employee, {onDelete: "CASCADE", onUpdate: "CASCADE"});
Employee.belongsTo(Employee, {
    foreingKey: "id"
});

Employee.hasMany(Notifications, {onDelete: "CASCADE", onUpdate: "CASCADE"});
Notifications.belongsTo(Employee, {
    foreingKey: "employeeId"
})

Employee.hasMany(Vacations, {onDelete: "CASCADE", onUpdate: "CASCADE"});
Vacations.belongsTo(Employee, {
    foreingKey: "employeeId"
})

module.exports = {Employee, Notifications, Vacations};
