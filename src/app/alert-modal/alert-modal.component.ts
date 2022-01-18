import { Component, Input, OnInit } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css']
})
export class AlertModalComponent implements OnInit {
@Input() message:any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.message)
  }

}
