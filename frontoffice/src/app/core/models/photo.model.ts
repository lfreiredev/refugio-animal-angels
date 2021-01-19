import { Base } from './base.model';

export interface Photo extends Base, PhotoBase {
  alternativeText: string;
  caption: string;
  formats: PhotoFormat;
  ext: string;
  hash: string;
  height: number;
  mime: string;
  name: string;
  size: number;
  url: string;
  width: number;
  provider: string;
  related: string[];

  // own values
  loaded: boolean;
}

export interface PhotoBase {
  ext: string;
  hash: string;
  height: number;
  mime: string;
  name: string;
  path: string;
  size: number;
  url: string;
  width: number;
}

export interface PhotoFormat {
  thumbnail: PhotoBase;
  small: PhotoBase;
  medium: PhotoBase;
  large: PhotoBase;
}
