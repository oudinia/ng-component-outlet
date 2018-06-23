import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TeamsComponent} from './teams.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TeamsComponent],
  entryComponents: [TeamsComponent]
})
export class TeamsModule { }
