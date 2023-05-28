import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnInit,
  ViewEncapsulation,
  AfterContentInit,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ServerElementComponent
  implements OnInit, AfterContentInit, AfterViewInit
{
  @Input('srvElement') element: { type: string; name: string; content: string };
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;
  constructor() {}

  ngAfterViewInit(): void {
    console.log(
      'Text Content of Paragraph in ngAfterViewInit: ' +
        this.paragraph.nativeElement.textContent
    );
  }

  ngAfterContentInit(): void {
    console.log(
      'Text Content of Paragraph in ngAfterContentInit: ' +
        this.paragraph.nativeElement.textContent
    );
  }

  ngOnInit(): void {
    console.log(
      'Text Content of Paragraph in ngOnInit: ' +
        this.paragraph.nativeElement.textContent
    );
  }
}
