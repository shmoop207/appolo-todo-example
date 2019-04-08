"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const appolo_1 = require("appolo");
const view_1 = require("@appolo/view");
let Index = class Index {
    index(req, res) {
        return { serverURL: this.env.serverURL };
    }
};
tslib_1.__decorate([
    appolo_1.inject()
], Index.prototype, "env", void 0);
tslib_1.__decorate([
    appolo_1.get("/"),
    view_1.view("index.html")
], Index.prototype, "index", null);
Index = tslib_1.__decorate([
    appolo_1.controller()
], Index);
exports.Index = Index;
//# sourceMappingURL=index.js.map