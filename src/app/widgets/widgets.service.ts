import {Injectable} from '@angular/core';
import {GroupsComponent} from './groups/groups.component';
import {TeamsComponent} from './teams/teams.component';
import {WorldCupStatusComponent} from './world-cup-status/world-cup-status.component';
import {Observable} from 'rxjs/internal/Observable';
import {Widget} from '../in-memory/in-memory-dashboard.service';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WidgetsService {
  constructor(private http: HttpClient) {

  }

  getComponents() {
    const map = new Map<string, any>();

    map.set('GroupsComponent', GroupsComponent);
    map.set('TeamsComponent', TeamsComponent);
    map.set('WorldCupStatusComponent', WorldCupStatusComponent);

    return map;
  }

  getWidgetListWithContext(): Observable<Widget[]> {
    const apiUrl: string = '/api/widgets';

    return this.http.get<Widget[]>(apiUrl);
  }
}
