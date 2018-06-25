import {Component, Injector, OnInit} from '@angular/core';
import {WidgetContextService} from '../context.service';

@Component({
  selector: 'app-world-cup-status',
  templateUrl: './world-cup-status.component.html',
  styleUrls: ['./world-cup-status.component.scss']
})
export class WorldCupStatusComponent implements OnInit {

  public context: WidgetContextService;
  constructor(private injector: Injector) { }

  ngOnInit() {
    console.log(this.injector);
    this.context =  this.injector.get(WidgetContextService);
    console.log('context in WorldCupStatus component', this.context);
  }

}
