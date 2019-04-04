import { controller, inject, singleton, get, IRequest, IResponse } from "appolo";
import { view } from "@appolo/view";

@controller()
export class Index {

  @get("/")
  @view("../public/index.html")
  public index(req: IRequest, res: IResponse) {
    return {};
  }
}
