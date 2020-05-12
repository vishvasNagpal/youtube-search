import { Directive, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[mouseMoveTarget]',
})
export class MouseMoveDirectiveDirective {
  @Input('index') index: -1;
  @Output() mouseMoveTarget = new EventEmitter<any>();


  constructor(private elementRef: ElementRef) { }

  @HostListener('document:mousemove', ['$event.target'])
  public onMouseMove(target1) {

    const target = this.elementRef.nativeElement.contains(target1);
    if (target) {
      this.mouseMoveTarget.emit({index: this.index});
    }
  }
}
