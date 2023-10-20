import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private httpClient: HttpClient) {}

  list(): Course[] {
    return [
      { _id: '1', nome: 'Janio', categoria: 'professor' },
      { _id: '1', nome: 'ROmildo', categoria: 'professor' },
      { _id: '1', nome: 'Renildo', categoria: 'Aluno' },
      { _id: '1', nome: 'Genildo', categoria: 'professor' },
    ];
  }
}
