import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNoImage]'
})
export class NoImageDirective {

  constructor(private elementRefImg: ElementRef) { }

  @HostListener('error')
  onError() {
    this.elementRefImg.nativeElement.src = './assets/images/default-image.jpg';
  }

}
