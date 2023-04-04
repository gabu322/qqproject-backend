const Employee = require("../models/Employees");
const Notifications = require("../models/Notification");
const Vacation = require("../models/Vacation")

Employee.hasOne(Employee, { onDelete: "CASCADE", onUpdate: "CASCADE" });
Employee.belongsTo(Employee, {
    foreingKey: "id"
});

Employee.hasMany(Notifications, { onDelete: "CASCADE", onUpdate: "CASCADE" });
Notifications.belongsTo(Employee, {
    foreingKey: "employeeId"
})

Employee.hasMany(Vacation, { onDelete: "CASCADE", onUpdate: "CASCADE" });
Vacation.belongsTo(Employee, {
    foreingKey: "employeeId"
})

module.exports = { Employee, Notifications, Vacation };
