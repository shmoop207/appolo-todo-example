"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const validation_1 = require("@appolo/validation");
class TodoCreateModel {
}
tslib_1.__decorate([
    validation_1.param(validation_1.joi.string().required())
], TodoCreateModel.prototype, "name", void 0);
exports.TodoCreateModel = TodoCreateModel;
//# sourceMappingURL=todoCreateModel.js.map