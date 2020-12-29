"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const appolo_validator_1 = require("appolo-validator");
class TodoCreateModel {
}
tslib_1.__decorate([
    appolo_validator_1.string().required(),
    tslib_1.__metadata("design:type", String)
], TodoCreateModel.prototype, "name", void 0);
exports.TodoCreateModel = TodoCreateModel;
//# sourceMappingURL=todoCreateModel.js.map