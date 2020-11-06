"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoUpdateModel = void 0;
const tslib_1 = require("tslib");
const validator_1 = require("@appolo/validator");
class TodoUpdateModel {
}
tslib_1.__decorate([
    validator_1.string().required(),
    tslib_1.__metadata("design:type", String)
], TodoUpdateModel.prototype, "name", void 0);
tslib_1.__decorate([
    validator_1.string().required(),
    tslib_1.__metadata("design:type", String)
], TodoUpdateModel.prototype, "id", void 0);
tslib_1.__decorate([
    validator_1.boolean().required(),
    tslib_1.__metadata("design:type", Boolean)
], TodoUpdateModel.prototype, "done", void 0);
exports.TodoUpdateModel = TodoUpdateModel;
//# sourceMappingURL=todoUpdateModel.js.map