import { string,boolean } from "@appolo/validator";

export class TodoUpdateModel {
  @string().required()
  name: string;

  @string().required()
  id: string;

  @boolean().required()
  done: boolean;
}
