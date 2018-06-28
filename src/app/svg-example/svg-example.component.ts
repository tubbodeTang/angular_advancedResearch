import { Component, OnInit } from '@angular/core';

declare var Snap: any;

@Component({
  selector: 'app-svg-example',
  templateUrl: './svg-example.component.html',
  styleUrls: ['./svg-example.component.css']
})
export class SvgExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.createSvg();
  }
  //Create svg
  createSvg() {

    let svgCanvas;
    svgCanvas = Snap("#svg");
    debugger;
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
}
