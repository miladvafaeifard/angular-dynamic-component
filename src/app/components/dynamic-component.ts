import {
  Component,
  Input,
  ViewContainerRef,
  ViewChild,
  ReflectiveInjector,
  ComponentFactoryResolver
} from '@angular/core';
import { HelloModalComponent } from './hello-modal/hello-modal.component';
import { ByeModalComponent } from './bye-modal/bye-modal.component';

@Component({
  selector: 'dynamic-component',
  entryComponents: [HelloModalComponent, ByeModalComponent],
  template: `
    <div #dynamicComponentContainer></div>
  `
})
export default class DynamicComponent {
  currentComponent = null;

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef })
  dynamicComponentContainer: ViewContainerRef;
  // component: Class for the component you want to create
  // inputs: An object with key/value pairs mapped to input name/input value
  @Input() set componentData(data: { component: any; inputs: any }) {
    if (!data) {
      return;
    }

    // Inputs need to be in the following format to be resolved properly
    const inputProviders = Object.keys(data.inputs).map(inputName => {
      return { provide: inputName, useValue: data.inputs[inputName] };
    });
    const resolvedInputs = ReflectiveInjector.resolve(inputProviders);

    // We create an injector out of the data we want to pass down and this components injector
    const injector = ReflectiveInjector.fromResolvedProviders(
      resolvedInputs,
      this.dynamicComponentContainer.parentInjector
    );

    // We create a factory out of the component we want to create
    const factory = this.resolver.resolveComponentFactory(data.component);

    // We create the component using the factory and the injector
    const component = factory.create(injector);

    // We insert the component into the dom container
    this.dynamicComponentContainer.insert(component.hostView);

    // We can destroy the old component is we like by calling destroy
    if (this.currentComponent) {
      this.currentComponent.destroy();
    }

    this.currentComponent = component;
  }

  constructor(private resolver: ComponentFactoryResolver) {}
}
