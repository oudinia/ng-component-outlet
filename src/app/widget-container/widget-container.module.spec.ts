import { WidgetContainerModule } from './widget-container.module';

describe('WidgetContainerModule', () => {
  let widgetContainerModule: WidgetContainerModule;

  beforeEach(() => {
    widgetContainerModule = new WidgetContainerModule();
  });

  it('should create an instance', () => {
    expect(widgetContainerModule).toBeTruthy();
  });
});
