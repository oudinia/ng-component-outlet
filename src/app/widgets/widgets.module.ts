import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GroupsModule} from './groups/groups.module';
import {TeamsModule} from './teams/teams.module';
import {WorldCupStatusModule} from './world-cup-status/world-cup-status.module';

@NgModule({
  imports: [
    CommonModule,
    GroupsModule,
    TeamsModule,
    WorldCupStatusModule
  ],
  declarations: []
})
export class WidgetsModule { }
