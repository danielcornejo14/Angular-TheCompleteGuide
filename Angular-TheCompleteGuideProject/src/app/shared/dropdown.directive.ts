import { Directive, Host, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @Input('appDropdown') isOpen;

  // @HostBinding('class.show') isOpen = false;

  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen
  }

  constructor() { }

}
