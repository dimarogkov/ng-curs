import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyles]'
})
export class StyleDirective {

  constructor(private el: ElementRef, private r: Renderer2) {}

  @HostListener('mouseenter') onHover() {
    this.r.setStyle(this.el.nativeElement, 'color', 'red');
  }

  @HostListener('mouseleave') onLeave() {
    this.r.setStyle(this.el.nativeElement, 'color', null);
  }

}
