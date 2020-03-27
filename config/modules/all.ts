import { IEnv } from "../env/IEnv";
import { App } from "appolo";
import { MongoModule } from "@appolo/mongo";
import { ViewModule, ViewEngines } from "@appolo/view";
import { ValidationModule } from "@appolo/validator";
import { LoggerModule } from "@appolo/logger";

export = async function(app: App, env: IEnv) {
  await app.module(LoggerModule);

  await app.module(
    ViewModule.for({ viewEngine: ViewEngines.nunjucks }),
    ValidationModule,
    MongoModule.for({ connection: env.mongo }));

}
