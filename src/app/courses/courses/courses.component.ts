import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [
    { _id: "1", nome: "Janio", categoria: "professor"},
    { _id: "1", nome: "ROmildo", categoria: "professor"},
    { _id: "1", nome: "Renildo", categoria: "Aluno"},
    { _id: "1", nome: "Genildo", categoria: "professor"}

  ];
  displayedColumns = ['nome', 'categoria']

  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
