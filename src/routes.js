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

const VacationController = require("../controller/VacationController");
routes.post('/vacation', VacationController.createVacationRequest)
routes.get('/vacation/:employeeId', VacationController.getVacationsByEmployee)
routes.put('/vacation/:id', VacationController.updateVacationsById);

module.exports = routes;
