import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { FormCadastroComponent } from './components/form-cadastro/form-cadastro.component';
import { CategoryPipe } from './pipes/category.pipe';

import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    ErrorDialogComponent,
    CategoryPipe,
    FormCadastroComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    FormsModule,
    MatSelectModule
  ],
  exports:[
    ErrorDialogComponent,
    CategoryPipe
  ]
})
export class SharedModule { }
