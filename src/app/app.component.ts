import {Component, Injector, OnInit, ReflectiveInjector} from '@angular/core';
import {WidgetsService} from './widgets/widgets.service';
import {WidgetContext, WidgetContextService} from './widgets/context.service';
import {Widget} from './in-memory/in-memory-dashboard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public widgets: Widget[];
  public componentsMap: Map<string, any>;
  localInjector: Injector;

  constructor(public widgetsService: WidgetsService) {}

  ngOnInit() {
    this.widgetsService.getWidgetListWithContext().subscribe(widgets => {
      let widgetsListWithComponents: Widget[] = [];
      widgets.forEach(w => {
        const widget: Widget = <Widget>{};
        const context: WidgetContextService = new WidgetContextService();

        context.widgetId = w.widgetId;
        context.widgetName = w.widgetName;

        widget.widgetName = w.widgetName;
        widget.widgetId = w.widgetId;
        widget.component = this.widgetsService.getComponents().get(w.widgetName);
        widget.context = context;

        widgetsListWithComponents.push(widget);
      });

      this.widgets = widgetsListWithComponents;
    });
  }
}
