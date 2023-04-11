const Notification = require("../models/Notification")

module.exports = {
    async createNotification(req, res) {
        const notification = await Notification.create(req.body);
        return res.json(notification);
    },
    async getNotificationsByEmployeeId(req, res) {
        const notification = await Notification.findAll({
            where: {
                employeeId: req.params.employeeId,
            }
        })
        return res.json(notification);
    },
    async readNotification(req, res) {
        await Notification.update(req.body,
            {
                where: {
                    id: req.params.id
                }
            }
        );
        return res.send("Férias lidas");
    },
}
