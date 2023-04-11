const express = require('express');
const routes = express.Router();

const EmployeeController = require("../controller/EmployeeController");
routes.post('/singin', EmployeeController.registerEmployee);
routes.get('/login/email/:businessEmail', EmployeeController.getEmployeeByEmail);
routes.get('/login/id/:employeeId', EmployeeController.getEmployeeByRegistration);
routes.get('/employeeRegistration', EmployeeController.getAllEmployees);
routes.put('/employeeRegistration/:employeeId', EmployeeController.getCurrentEmployee);
routes.get('/employeeRegistration/managers', EmployeeController.getManagers);
routes.get('/employeeRegistration/managers/:name', EmployeeController.getManagerByName);
routes.get('/vacationVerification/:managerId', EmployeeController.getEmployeeByManager);
routes.get('/getEmployeeById/:id', EmployeeController.getEmployeeById);

const VacationController = require("../controller/VacationController");
routes.post('/vacation', VacationController.createVacationRequest)
routes.get('/vacations/:employeeId', VacationController.getVacationsByEmployee)
routes.put('/vacation/:id', VacationController.updateVacationsById);
routes.get('/vacationDate/:date', VacationController.checkIfDateHasVacations);

const NotificationController = require("../controller/NotificationController");
routes.post('/notification', NotificationController.createNotification);
routes.get('/notification/:employeeId', NotificationController.getNotificationsByEmployeeId);
routes.put('/notification/:id', NotificationController.readNotification);

module.exports = routes;
