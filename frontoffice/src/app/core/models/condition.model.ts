import { Base } from './base.model';

export interface Condition extends Base {
  type: string;
  description: string;
}
