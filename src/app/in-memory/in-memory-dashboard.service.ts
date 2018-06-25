import {Component, Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {GroupsComponent} from '../widgets/groups/groups.component';
import {TeamsComponent} from '../widgets/teams/teams.component';
import {WorldCupStatusComponent} from '../widgets/world-cup-status/world-cup-status.component';
import {WidgetContext, WidgetContextService} from '../widgets/context.service';

export interface Widget {
  widgetId: number;
  widgetName: string;
  component: any;
  context: WidgetContextService;
}

@Injectable()
export class InMemoryDashboardService implements InMemoryDbService {
  createDb() {
    const widgets: Widget[] = [
      {widgetId: 1, widgetName: 'GroupsComponent', component: null, context: null},
      {widgetId: 2, widgetName: 'TeamsComponent', component: null, context: null},
      {widgetId: 3, widgetName: 'WorldCupStatusComponent', component: null, context: null}
    ];

    return {widgets};
  }
}

