import {
  Component, OnInit, ViewChild, ViewContainerRef,
  ComponentFactory,
  ComponentRef, ComponentFactoryResolver
} from '@angular/core';
import { dynamSvgComponent } from './dynamSvgInsert/dynamSvg.component';

import svgList from "./svgInfo.json";

declare var Snap: any;

@Component({
  selector: 'app-svg-example',
  templateUrl: './svg-example.component.html',
  styleUrls: ['./svg-example.component.css']
})
export class SvgExampleComponent implements OnInit {

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.createSvg();
    svgList.forEach(svg => {
      this.createComponent(svg)
    })
  }


  //Create svg by snapSvg
  createSvg() {

    let svgCanvas;
    svgCanvas = Snap("#svg");
    // Lets create big circle in the middle:
    var bigCircle = svgCanvas.circle(150, 150, 100);
    // By default its black, lets change its attributes
    bigCircle.attr({
      fill: "#bada55",
      stroke: "#000",
      strokeWidth: 5
    });
    // Now lets create another small circle:
    var smallCircle = svgCanvas.circle(100, 150, 70);

    var discs = svgCanvas.group(smallCircle, svgCanvas.circle(200, 150, 70))

    discs.attr({
      fill: "#ccc"
    })

  }



  componentRef: ComponentRef<dynamSvgComponent>;

  @ViewChild("svg", { read: ViewContainerRef }) container: ViewContainerRef;

  createComponent(svgItem: any) {
    //this.container.clear();
    const factory: ComponentFactory<dynamSvgComponent> =
      this.resolver.resolveComponentFactory(dynamSvgComponent);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.svgItem = svgItem;
    // this.componentRef.instance.output.subscribe((msg: string) => console.log(msg));
  }

  ngOnDestroy() {
    this.componentRef.destroy()
  }


}
