import { Base } from './base.model';

export interface Contact extends Base {
  type: string;
  description: string;
}
