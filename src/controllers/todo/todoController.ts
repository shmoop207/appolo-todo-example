import { controller, inject, post, get, IRequest, IResponse, del, patch } from "appolo";
import { TodoManagers } from "../../managers/todoManagers";
import { joi, validate } from "@appolo/validation";
import { TodoCreateModel } from "./todoCreateModel";
import { TodoUpdateModel } from "./todoUpdateModel";

@controller("/api")
export class TodoController {

  @inject() todoManagers: TodoManagers;

  @get("/all")
  public getAll(req: IRequest, res: IResponse) {
    return this.todoManagers.getAll();
  }

  @post("/add")
  @validate(TodoCreateModel)
  public add(req: IRequest, res: IResponse, model: TodoCreateModel) {
    return this.todoManagers.create(model.name);
  }

  @del("/delete/:id")
  @validate("id", joi.string().required())
  public delete(req: IRequest, res: IResponse, model: { id: string }) {
    return this.todoManagers.delete(model.id);
  }

  @patch("/update/:id")
  @validate(TodoUpdateModel)
  public update(req: IRequest, res: IResponse, model: TodoUpdateModel) {
    return this.todoManagers.update(model.id, { name: model.name, done: model.done });
  }
}
