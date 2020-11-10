import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem: ElementRef) { }
   
  @HostListener('click') onClicks() {
    this.highlight('green')
  }

  @HostListener('dbclick') onDoubleClick() {
    this.highlight('null')
  }

private highlight(action: string) {
  this.elem.nativeElement.stylebackgroundColor = action;
}

}
