'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('employees', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true

            },
            employeeId: {
                type: Sequelize.STRING,
                allowNull: false
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false
            },
            cpf_cnpj: {
                type: Sequelize.STRING,
                allowNull: false
            },
            businessEmail: {
                type: Sequelize.STRING,
                allowNull: false
            },
            personalEmail: {
                type: Sequelize.STRING,
            },
            contractType: {
                type: Sequelize.STRING,
            },
            managerId: {
                type: Sequelize.INTEGER,
                references: {model: "employees", key: "id"},
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            },
            isManager: {
                type: Sequelize.BOOLEAN,
            },
            permissionEditEmployeeRegistration: {
                type: Sequelize.BOOLEAN,
            },
            lastThirtheenth: {
                type: Sequelize.DATEONLY,
            },
            vacationDaysLeft: {
                type: Sequelize.INTEGER,
            },
            admissionDate: {
                type: Sequelize.DATEONLY,
            },
            createdAt: {
                type: Sequelize.DATE
            },
            updatedAt: {
                type: Sequelize.DATE
            }
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('employees');
    }
};
