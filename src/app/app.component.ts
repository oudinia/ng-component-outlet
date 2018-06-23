import {Component, Injector, ReflectiveInjector} from '@angular/core';
import {Context, WidgetsService} from './widgets/widgets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public componentsMap: Map<string, any>;
  localInjector: Injector;

  constructor(public widgetsService: WidgetsService, public context: Context, public injector: Injector) {

    this.context.contextProp = 15464565;
    this.componentsMap = this.widgetsService.getComponents();
    console.log(this.componentsMap);
    const inputs = [{provide: 'Context', useValue: this.context}];
    this.localInjector = Injector.create({providers: inputs});

  }
}
