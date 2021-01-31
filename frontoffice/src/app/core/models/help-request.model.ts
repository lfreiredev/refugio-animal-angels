import { Base } from './base.model';
import { Photo } from './photo.model';

export interface HelpRequest extends Base {
  description: string;
  image: Photo;
}
