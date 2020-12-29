import { controller, inject, singleton, get, IRequest, IResponse } from "appolo";
import { view } from "@appolo/view";
import { IEnv } from "../../../config/env/IEnv";

@controller()
export class Index {

  @inject() env:IEnv;

  @get("/")
  @view("index.html")
  public index(req: IRequest, res: IResponse) {
    return {serverURL:this.env.serverURL};
  }
}
