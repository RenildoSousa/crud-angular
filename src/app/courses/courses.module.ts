import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatCardModule } from '@angular/material/card';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';

@NgModule({
  declarations: [CoursesComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule
  ]
})
export class CoursesModule {}
