import { Base } from './base.model';
import { Photo } from './photo.model';

export interface HelpRequest extends Base {
  title: string;
  description: string;
  image: Photo;

  isOpen: boolean;
}
