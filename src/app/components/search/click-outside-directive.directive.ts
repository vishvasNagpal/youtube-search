import { Directive, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[clickOutside]',
})
export class ClickOutsideDirectiveDirective {

  @Output() clickOutside = new EventEmitter<any>();

  constructor(private elementRef: ElementRef) { }

  @HostListener('document:click', ['$event.target'])
  public onClick(target) {
    const clickedInside = this.elementRef.nativeElement.contains(target);
    if (!clickedInside) {
      this.clickOutside.emit();
    }
  }
}
