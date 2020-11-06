import { controller, get, IRequest, IResponse } from "@appolo/route";
import { inject, singleton, } from "@appolo/inject";
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
