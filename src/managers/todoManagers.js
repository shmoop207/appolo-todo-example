"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoManagers = void 0;
const tslib_1 = require("tslib");
const inject_1 = require("@appolo/inject");
const mongo_1 = require("@appolo/mongo");
const todo_1 = require("../models/todo");
let TodoManagers = class TodoManagers {
    getAll() {
        return this.model.find({})
            .exec();
    }
    getById(id) {
        return this.model.findById(id)
            .exec();
    }
    async create(name) {
        let dto = { name, done: false };
        let doc = new this.model(dto);
        await doc.save();
        return doc;
    }
    delete(id) {
        return this.model.findOneAndDelete({ _id: id })
            .exec();
    }
    async update(id, todo) {
        let doc = await this.getById(id);
        doc.name = todo.name;
        doc.done = todo.done;
        await doc.save();
        return doc;
    }
};
tslib_1.__decorate([
    mongo_1.model(todo_1.Todo),
    tslib_1.__metadata("design:type", Object)
], TodoManagers.prototype, "model", void 0);
TodoManagers = tslib_1.__decorate([
    inject_1.define(),
    inject_1.singleton()
], TodoManagers);
exports.TodoManagers = TodoManagers;
//# sourceMappingURL=todoManagers.js.map