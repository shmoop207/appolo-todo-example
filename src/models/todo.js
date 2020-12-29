"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongo_1 = require("@appolo/mongo");
let Todo = class Todo extends mongo_1.Schema {
};
tslib_1.__decorate([
    mongo_1.prop({ type: String }),
    tslib_1.__metadata("design:type", String)
], Todo.prototype, "name", void 0);
tslib_1.__decorate([
    mongo_1.prop({ type: Boolean }),
    tslib_1.__metadata("design:type", Boolean)
], Todo.prototype, "done", void 0);
Todo = tslib_1.__decorate([
    mongo_1.model(),
    mongo_1.schema("todos")
], Todo);
exports.Todo = Todo;
//# sourceMappingURL=todo.js.map