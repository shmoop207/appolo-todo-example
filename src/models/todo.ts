import { prop, schema, Schema, model } from "@appolo/mongo";

@model()
@schema("todos")
export class Todo extends Schema {

  @prop({ type: String })
  name: string;

  @prop({ type: Boolean })
  done: boolean;
}
