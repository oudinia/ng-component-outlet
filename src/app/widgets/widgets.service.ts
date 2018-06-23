import {Injectable} from '@angular/core';
import {GroupsComponent} from './groups/groups.component';
import {TeamsComponent} from './teams/teams.component';
import {WorldCupStatusComponent} from './world-cup-status/world-cup-status.component';

@Injectable({
  providedIn: 'root'
})
export class WidgetsService {


  getComponents() {
    const map = new Map<string, any>();


    map.set('Groups', GroupsComponent);
    map.set('Teams', TeamsComponent);
    map.set('WorldCupStatus', WorldCupStatusComponent);

    return map;
  }
}

@Injectable({
  providedIn: 'root'
})
export class Context {
  public contextProp : number;
}
