import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// componets
import { DummyComponent } from './dummy.component';
import { DummyDirective } from './dummy.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DummyDirective,

    DummyComponent
  ]
})
export class DummyModule { }