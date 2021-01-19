import { Base } from './base.model';
import { DogRace } from './dog-race.model';
import { Photo } from './photo.model';
import { Contact } from './contact.model';
import { Condition } from './condition.model';

export interface BaseAnimal extends Base {
  name: string;
  age: number;
  description: string;
  sex: string;
  size: string;
  contacts: Contact[];
  conditions: Condition[];
  photo: Photo;
  race: DogRace;
}
