import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhotoFormat } from '../models/photo.model';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  private readonly url = 'https://api.refugioanimalangels.com';
  constructor() {}

  getThumbnail(format: PhotoFormat): string {
    return this.url + format.thumbnail.url;
  }

  getSmall(format: PhotoFormat): string {
    return this.url + format.small.url;
  }

  getMedium(format: PhotoFormat): string {
    return this.url + format.medium.url;
  }

  getLarge(format: PhotoFormat): string {
    return this.url + format.large.url;
  }
}
