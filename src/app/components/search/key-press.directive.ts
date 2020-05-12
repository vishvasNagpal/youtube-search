import { Directive, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[keyPress]',
})
export class KeyPressDirective {
  @Input('selectedIndex') selectedIndex;
  @Output() keyPress = new EventEmitter<any>();

  constructor(private elementRef: ElementRef) { }

  @HostListener('document:keyup', ['$event', '$event.target'])
  public onMouseMove(eve, target1) {
    const target = this.elementRef.nativeElement.contains(target1);
    if (eve.key === 'ArrowDown' && target) {
      this.keyPress.emit({index: this.selectedIndex + 1});
    }
    if (eve.key === 'ArrowUp' && target) {
      this.keyPress.emit({index: this.selectedIndex - 1});
    }
  }
}
