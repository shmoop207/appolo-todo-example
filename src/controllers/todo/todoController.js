"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const appolo_1 = require("appolo");
const validation_1 = require("@appolo/validation");
const todoCreateModel_1 = require("./todoCreateModel");
const todoUpdateModel_1 = require("./todoUpdateModel");
let TodoController = class TodoController {
    getAll(req, res) {
        return this.todoManagers.getAll();
    }
    add(req, res, model) {
        return this.todoManagers.create(model.name);
    }
    delete(req, res, model) {
        return this.todoManagers.delete(model.id);
    }
    update(req, res, model) {
        return this.todoManagers.update(model.id, { name: model.name, done: model.done });
    }
};
tslib_1.__decorate([
    appolo_1.inject()
], TodoController.prototype, "todoManagers", void 0);
tslib_1.__decorate([
    appolo_1.get("/all")
], TodoController.prototype, "getAll", null);
tslib_1.__decorate([
    appolo_1.post("/add"),
    validation_1.validate(todoCreateModel_1.TodoCreateModel)
], TodoController.prototype, "add", null);
tslib_1.__decorate([
    appolo_1.del("/delete/:id"),
    validation_1.validate("id", validation_1.joi.string().required())
], TodoController.prototype, "delete", null);
tslib_1.__decorate([
    appolo_1.patch("/update/:id"),
    validation_1.validate(todoUpdateModel_1.TodoUpdateModel)
], TodoController.prototype, "update", null);
TodoController = tslib_1.__decorate([
    appolo_1.controller("/api")
], TodoController);
exports.TodoController = TodoController;
//# sourceMappingURL=todoController.js.map