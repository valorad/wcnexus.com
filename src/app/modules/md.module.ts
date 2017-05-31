import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  MdButtonModule,
  MdCheckboxModule,
  MdToolbarModule,
  MdCardModule,
  MdInputModule,
  MdSelectModule,
  MdTabsModule,
  MdProgressBarModule,
  MdSnackBarModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdCardModule,
    MdInputModule,
    MdSelectModule,
    MdTabsModule,
    MdProgressBarModule,
    MdSnackBarModule
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdCardModule,
    MdInputModule,
    MdSelectModule,
    MdTabsModule,
    MdProgressBarModule,
    MdSnackBarModule
  ]
})
export class MdModule { }
