import {Injectable} from '@angular/core';


export class WidgetContextService {
  public widgetId: number;
  public widgetName: string;

  constructor(){
    this.widgetId = 30303030;
    this.widgetName = "test for injection";
  }
}

export class WidgetContext {
  widgetId: number;
  widgetName: string;
}


