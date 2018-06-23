import { Component } from '@angular/core';
import {GroupsComponent} from './groups/groups.component';
import {TeamsComponent} from './teams/teams.component';
import {WorldCupStatusComponent} from './world-cup-status/world-cup-status.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  GroupsComponent = GroupsComponent;
  TeamsComponent = TeamsComponent;
  WorldCupStatusComponent = WorldCupStatusComponent;


}
