import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WorldCupStatusComponent} from './world-cup-status.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WorldCupStatusComponent],
  entryComponents: [WorldCupStatusComponent]
})
export class WorldCupStatusModule { }
