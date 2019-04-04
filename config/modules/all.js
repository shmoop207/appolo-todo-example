"use strict";
const mongo_1 = require("@appolo/mongo");
const view_1 = require("@appolo/view");
const validation_1 = require("@appolo/validation");
module.exports = async function (app, env) {
    await app.module(new view_1.ViewModule({ viewEngine: view_1.ViewEngines.nunjucks }));
    await app.module(validation_1.ValidationModule);
    await app.module(new mongo_1.MongoModule({ connection: env.mongo }));
};
//# sourceMappingURL=all.js.map