import {joi,param} from '@appolo/validation';

export class TodoCreateModel {
  @param(joi.string().required())
  name: string;
}
