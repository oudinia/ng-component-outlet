import {Component, Injector, Input, OnInit, ReflectiveInjector} from '@angular/core';
import {Widget} from '../in-memory/in-memory-dashboard.service';
import {WidgetContext, WidgetContextService} from '../widgets/context.service';


@Component({
  selector: 'app-widget-container',
  templateUrl: './widget-container.component.html',
  styleUrls: ['./widget-container.component.css']
})
export class WidgetContainerComponent implements OnInit {
  @Input() public widgets: Widget[];


  public myInjector: Injector;

  constructor(public injector: Injector) {

    // const inputs = [{provide: 'Context', useClass: WidgetContext}];
    // this.myInjector = Injector.create({providers: inputs});

  }

  ngOnInit(): void {

  }

  getInjector(context: WidgetContextService): Injector {
    let inputs = [{provide: WidgetContextService, useValue: context}];
    let staticInput = [{provide: WidgetContextService, useValue: context}];
    // console.log('new inject.create', Injector.create({providers: staticInput}).get(WidgetContextService));
    // console.log('deprecated injector');
    //return Injector.create({providers: staticInput});

    return ReflectiveInjector.resolveAndCreate(inputs, this.injector);
  }

}
