import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem: ElementRef) { }
   
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('null')
  }

private highlight(action: string) {
  this.elem.nativeElement.stylebackgroundColor = action;
}

}
