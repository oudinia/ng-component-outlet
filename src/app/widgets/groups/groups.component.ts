import {Component, Injector, OnInit} from '@angular/core';
import {WidgetContext, WidgetContextService} from '../context.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  public context: WidgetContextService;
  constructor(private injector: Injector) { }

  ngOnInit() {
    console.log(this.injector);
    this.context =  this.injector.get(WidgetContextService);
    console.log('context in groups component', this.context);
  }

}
