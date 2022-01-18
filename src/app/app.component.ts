import { Component,OnInit } from '@angular/core';
import { SharedService } from './shared.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title :any=[];
  constructor(private service:SharedService){}
  ngOnInit(): void{
    this.getTitle()
  }
  getTitle(){
    this.service.getTitle().subscribe(
      data=>{
        this.title=data;
      }
    )
  }
}
