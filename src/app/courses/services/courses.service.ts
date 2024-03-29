import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import {HttpClient} from '@angular/common/http'
import { first, tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {

  private readonly API = '/assets/coursess.json'

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(),
      delay(500),
      tap(courses => console.log(courses))
      );
  }
}
