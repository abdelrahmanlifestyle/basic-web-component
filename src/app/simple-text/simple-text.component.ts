import {Component, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-simple-text',
  templateUrl: './simple-text.component.html',
  styleUrls: ['./simple-text.component.scss']
})
export class SimpleTextComponent implements OnInit {
  @Input() container: any = {};
  @Input() content: any = {};
  customContent: any = {};
  @Input() style: any;
  @Input() isDraft = false;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    console.log('simple-text-init');
    this.customContent = JSON.parse(this.content);
  }


  onSatisfied(){
    this.el.nativeElement
      .dispatchEvent(new CustomEvent('updateSatisfiedEvent', {
        bubbles: true
      }))
  }

}
