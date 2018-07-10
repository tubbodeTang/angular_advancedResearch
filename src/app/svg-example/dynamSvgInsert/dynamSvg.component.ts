import {
    Component, Input, Output, EventEmitter, OnInit,
    Renderer2, ViewChild, ElementRef,
    AfterViewInit
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: "dynam-svg",
    template: `
    <div id="{{svgItem.id}}" #greet>
        <embed #embed
          [src]="this.sanitizer.bypassSecurityTrustResourceUrl(this.svgItem.filename)" 
          id="{{svgItem.id}}_embed" 
          type="image/svg+xml" 
          style=""/>
    </div>
    `,
    // <img [src]="this.sanitizer.bypassSecurityTrustResourceUrl(this.svgItem.pngname)"/>
})
export class dynamSvgComponent implements OnInit, AfterViewInit {
    @Input() svgItem: any = null;
    //@Output() output = new EventEmitter();</embed>

    constructor(public sanitizer: DomSanitizer,
        private renderer2: Renderer2) { }

    ngOnInit() { }

    @ViewChild('greet') divDom: ElementRef;
    @ViewChild('embed') embedDom: ElementRef;

    ngAfterViewInit() {
        //调整div大小、位置
        this.renderer2.setStyle(this.divDom.nativeElement, 'left', this.svgItem.x);
        this.renderer2.setStyle(this.divDom.nativeElement, 'top', this.svgItem.y);
        this.renderer2.setStyle(this.divDom.nativeElement, 'width', this.svgItem.width);
        this.renderer2.setStyle(this.divDom.nativeElement, 'position', 'relative');
    }
    // URL() {
    //     return this.sanitizer.bypassSecurityTrustUrl("assets/img/devices/svg"+this.fileName+".svg");
    // }
}