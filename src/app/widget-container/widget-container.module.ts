import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WidgetContainerComponent} from './widget-container.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WidgetContainerComponent],
  exports: [WidgetContainerComponent],
  providers: []
})
export class WidgetContainerModule {
}
