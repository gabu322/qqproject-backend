'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('notification', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            employeeId: {
                type: Sequelize.INTEGER,
                references: {model: "employees", key: "id"},
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            },
            sentDate: {
                type: Sequelize.DATEONLY,
                allowNull: false
            },
            state: {
                type: Sequelize.STRING,
                allowNull: false
            },
            text: {
                type: Sequelize.STRING,
                allowNull: false
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
        await queryInterface.dropTable('notification');
    }
};
