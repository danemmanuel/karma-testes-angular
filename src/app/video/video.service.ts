import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class VideoService {
  constructor(private http: HttpClient) {}

  ll = 0;

  getVideos(): any {
    return this.http.get(`http://localhost:3000/listar`);
  }
}
