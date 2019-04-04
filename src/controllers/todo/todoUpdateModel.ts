import {joi,param} from '@appolo/validation';

export class TodoUpdateModel {
  @param(joi.string().required())
  name: string;

  @param(joi.string().required())
  id: string;

  @param(joi.bool().required())
  done: boolean;
}
