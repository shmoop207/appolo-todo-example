"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const validation_1 = require("@appolo/validation");
class TodoUpdateModel {
}
tslib_1.__decorate([
    validation_1.param(validation_1.joi.string().required())
], TodoUpdateModel.prototype, "name", void 0);
tslib_1.__decorate([
    validation_1.param(validation_1.joi.string().required())
], TodoUpdateModel.prototype, "id", void 0);
tslib_1.__decorate([
    validation_1.param(validation_1.joi.bool().required())
], TodoUpdateModel.prototype, "done", void 0);
exports.TodoUpdateModel = TodoUpdateModel;
//# sourceMappingURL=todoUpdateModel.js.map