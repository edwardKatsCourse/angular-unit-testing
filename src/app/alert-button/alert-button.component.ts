import { Component, OnInit } from '@angular/core';
import {Observable, timer} from "rxjs";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-alert-button',
  templateUrl: './alert-button.component.html',
  styleUrls: ['./alert-button.component.css']
})
export class AlertButtonComponent implements OnInit {

  content = "warning";
  contentObservable: Observable<any>;
  hideContent = true;
  severity = 123;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.contentObservable = this.messageService.getContent();
  }

  toggle() {
    this.hideContent = !this.hideContent;
  }

  toggleAsync() {
    timer(500).subscribe(() => {
      this.toggle()
    });
  }

}
