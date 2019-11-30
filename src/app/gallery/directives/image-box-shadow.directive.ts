import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appImageSize]'
})
export class ImageBoxShadowDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.focus('#6585EE 10px 10px 10px 10px');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.focus('#555 1px 1px 8px 1px');
  }

  private focus(boxShadow: string) {
    this.el.nativeElement.style.boxShadow = boxShadow;
    this.el.nativeElement.style.transform = 'translateX(-15px)';
    this.el.nativeElement.style.transform = 'translateY(-15px)';
  }

}
