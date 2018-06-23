import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GroupsComponent} from './groups.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GroupsComponent],
  entryComponents:[GroupsComponent]
})
export class GroupsModule { }
