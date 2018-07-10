import {
  Component, OnInit, ViewChild, ViewContainerRef,
  ComponentFactory,
  ComponentRef, ComponentFactoryResolver, OnDestroy
} from '@angular/core';

import { AlertComponent } from './componentInsert/insert.component';
@Component({
  selector: 'app-dynam-component',
  templateUrl: './dynam-component.component.html',
  styleUrls: ['./dynam-component.component.css']
})
export class DynamComponentComponent implements OnInit, OnDestroy {

  componentRef: ComponentRef<AlertComponent>;

  @ViewChild("alertContainer", { read: ViewContainerRef }) container: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  createComponent(type: string) {
    this.container.clear();
    const factory: ComponentFactory<AlertComponent> =
      this.resolver.resolveComponentFactory(AlertComponent);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.type = type;
    this.componentRef.instance.output.subscribe((msg: string) => console.log(msg));
  }

  ngOnDestroy() {
    if (this.componentRef !== undefined) {
      this.componentRef.destroy()
    }
  }
}
