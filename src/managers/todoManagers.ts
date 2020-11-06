import { define, inject, singleton } from "@appolo/inject";
import { Model, model, Doc } from "@appolo/mongo";
import { Todo } from "../models/todo";

@define()
@singleton()
export class TodoManagers {

  @model(Todo) model: Model<Todo>;

  public getAll(): Promise<Doc<Todo>[]> {

    return this.model.find({})
      .exec();
  }

  public getById(id: string): Promise<Doc<Todo>> {

    return this.model.findById(id)
      .exec();
  }

  public async create(name: string): Promise<Doc<Todo>> {

    let dto = <Todo>{ name, done: false };

    let doc = new this.model(dto);

    await doc.save();

    return doc;
  }

  public delete(id: string): Promise<Doc<Todo>> {

    return this.model.findOneAndDelete({_id:id})
      .exec();
  }

  public async update(id: string, todo: Todo): Promise<Doc<Todo>> {
    let doc = await this.getById(id);

    doc.name = todo.name;
    doc.done = todo.done;

    await doc.save();

    return doc;

  }
}
