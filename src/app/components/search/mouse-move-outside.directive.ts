import { Directive, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[mouseMoveOutside]',
})
export class MouseMoveOutsideDirective {
  @Output() mouseMoveOutside = new EventEmitter<any>();

  constructor(private elementRef: ElementRef) { }

  @HostListener('document:mousemove', ['$event.target'])
  public onMouseMove(target1) {

    const target = this.elementRef.nativeElement.contains(target1);
    if (!target) {
      this.mouseMoveOutside.emit({index: -1});
    }
  }
}
