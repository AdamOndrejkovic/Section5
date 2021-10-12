import {
  Component, ContentChild, ElementRef,
  Input,
  OnChanges,
  OnInit, ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ServerElementComponent implements OnInit, OnChanges {
  // @ts-ignore
  @Input('srvElement') element: {type: string, name:string, content: string};
  // @ts-ignore
  @ViewChild('heading') header: ElementRef
  // @ts-ignore
  @ContentChild('contentParagraph') paragraph: ElementRef

  constructor() {
  }

  ngOnChanges(){

  }

  ngOnInit(): void {
  }

}
