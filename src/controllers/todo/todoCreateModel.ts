import { string,boolean,array } from "appolo-validator";

export class TodoCreateModel {
  @string().required()
  name: string;
}
