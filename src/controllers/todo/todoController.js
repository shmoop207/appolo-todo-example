"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const appolo_1 = require("appolo");
const todoManagers_1 = require("../../managers/todoManagers");
const validator_1 = require("@appolo/validator");
const todoCreateModel_1 = require("./todoCreateModel");
const todoUpdateModel_1 = require("./todoUpdateModel");
let TodoController = class TodoController {
    getAll() {
        return this.todoManagers.getAll();
    }
    add(model) {
        return this.todoManagers.create(model.name);
    }
    delete(model) {
        return this.todoManagers.delete(model.id);
    }
    update(model) {
        return this.todoManagers.update(model.id, { name: model.name, done: model.done });
    }
};
tslib_1.__decorate([
    appolo_1.inject(),
    tslib_1.__metadata("design:type", todoManagers_1.TodoManagers)
], TodoController.prototype, "todoManagers", void 0);
tslib_1.__decorate([
    appolo_1.get("/all"),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], TodoController.prototype, "getAll", null);
tslib_1.__decorate([
    appolo_1.post("/add"),
    validator_1.validate(todoCreateModel_1.TodoCreateModel),
    tslib_1.__param(0, appolo_1.model()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [todoCreateModel_1.TodoCreateModel]),
    tslib_1.__metadata("design:returntype", void 0)
], TodoController.prototype, "add", null);
tslib_1.__decorate([
    appolo_1.del("/delete/:id"),
    validator_1.validate({ "id": validator_1.string().required() }),
    tslib_1.__param(0, appolo_1.model()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], TodoController.prototype, "delete", null);
tslib_1.__decorate([
    appolo_1.patch("/update/:id"),
    validator_1.validate(),
    tslib_1.__param(0, appolo_1.model()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [todoUpdateModel_1.TodoUpdateModel]),
    tslib_1.__metadata("design:returntype", void 0)
], TodoController.prototype, "update", null);
TodoController = tslib_1.__decorate([
    appolo_1.controller("/api")
], TodoController);
exports.TodoController = TodoController;
//# sourceMappingURL=todoController.js.map