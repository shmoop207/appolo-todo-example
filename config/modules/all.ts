import { IEnv } from "../env/IEnv";
import { App } from "appolo";
import { MongoModule } from "@appolo/mongo";
import { ViewModule, ViewEngines } from "@appolo/view";
import { ValidationModule } from "@appolo/validation";

export = async function(app: App, env: IEnv) {

  await app.module(new ViewModule({ viewEngine: ViewEngines.nunjucks }));

  await app.module(ValidationModule);

  await app.module(new MongoModule({ connection: env.mongo }));
}
