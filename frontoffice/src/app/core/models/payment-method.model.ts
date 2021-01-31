import { Base } from './base.model';

export interface PaymentMethod extends Base {
  description: string;
  type: string;
}
