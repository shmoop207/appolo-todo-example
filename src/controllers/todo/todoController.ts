import { controller, post, get, IRequest, IResponse, del, patch, model } from "@appolo/route";
import { inject } from "@appolo/inject";
import { TodoManagers } from "../../managers/todoManagers";
import { validate, string } from "@appolo/validator";
import { TodoCreateModel } from "./todoCreateModel";
import { TodoUpdateModel } from "./todoUpdateModel";

@controller("/api")
export class TodoController {

  @inject() todoManagers: TodoManagers;

  @get("/all")
  public getAll() {
    return this.todoManagers.getAll();
  }

  @post("/add")
  @validate(TodoCreateModel)
  public add(@model() model: TodoCreateModel) {
    return this.todoManagers.create(model.name);
  }

  @del("/delete/:id")
  @validate({ "id": string().required() })
  public delete(@model() model: { id: string }) {
    return this.todoManagers.delete(model.id);
  }

  @patch("/update/:id")
  @validate()
  public update(@model() model: TodoUpdateModel) {
    return this.todoManagers.update(model.id, { name: model.name, done: model.done });
  }
}
