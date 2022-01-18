import { error } from '@angular/compiler/src/util';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  status='';
  success!:boolean;
  failure!:boolean;

  constructor(private fb: FormBuilder,private service:SharedService) { }
  
  @Input() user:any;
  userName!: string;
  email!: string;
  password!: string;

 registerForm= this.fb.group({

  userName:['',Validators.required],
  email:['',Validators.required],
  password:[''],
  confirmPassword:['']
 });
  onResponse(response:any){
    console.log('Sussuce',response.StatusData,this.status=response.StatusData)
  
    if( response.StatusData==="success"){
alert("User created Successfully");
this.success=true;
this.failure=false;
this.registerForm.reset();
    }
    else{
      this.success=false;
this.failure=true;

      alert("User with same credentials exists");
    }
  }
 onSubmit(){
  console.log(this.registerForm.value);
  this.service.signUp(this.registerForm.value)
.subscribe(

  response=>this.onResponse(response),
 error=> console.error(error)
  
)  
}
  ngOnInit(): void {
  }

}
