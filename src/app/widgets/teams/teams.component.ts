import {Component, Injector, OnInit} from '@angular/core';
import {WidgetContextService} from '../context.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  public context: WidgetContextService;
  constructor(private injector: Injector) { }

  ngOnInit() {
    console.log(this.injector);
    this.context =  this.injector.get(WidgetContextService);
    console.log('context in teams component', this.context);
  }

}
