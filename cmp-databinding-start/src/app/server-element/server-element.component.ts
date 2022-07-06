import { Component, Input, OnInit, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  constructor() { 
    console.log('constructor')
  }

  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string; 
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  ngOnChanges(changes: SimpleChanges): void{
    console.log('OnChanges', changes)
  }

  ngOnInit(): void {
    console.log('OnInit');
    //DOM HAS NOT BEEN RENDERED
    console.log("Text Content: "+this.header.nativeElement.textContent);
    console.log("Paragraph Content: "+this.paragraph.nativeElement.textContent);
  }

  ngDoCheck(): void {
    console.log('DoCheck')
  }

  ngAfterContentInit(): void {
    console.log('AfterContentInit')
    console.log("Paragraph Content: "+this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('AfterContentChecked')
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit')
    //DOM HAS BEEN RENDERED
    console.log(this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('AfterViewChecked')
  }

  ngOnDestroy(): void {
    console.log('OnDestroy')
  }

}
