import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Image} from './images'

@Injectable()
export class PhotoService {

    constructor(private http: HttpClient) { }

    getImages() {
    return this.http.get<any>('assets/data/photos.json')
      .toPromise()
      .then(res => <Image[]>res.data)
      .then(data => { return data; });
    }
}