import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {
  showNavBar: boolean = false
  onSubmit() {
    if (this.loginForm.get('password')?.value == "" || this.loginForm.get('userName')?.value == "") {
      
    } else {

      this.service.login(this.loginForm.value).subscribe(
        response => this.onResponse(response),
        error => console.error(error)
      )
    }
  }
  onResponse(response: any) {
    console.log(response)
    this.router.navigateByUrl("/landing-page")
    if (response.statusData == "success") {
      
   
      this.service.loginBool = false;
      this.service.IsloginBool = true;
      this.service.registerBool = false;
      this.service.showSignOut = true;
      if (response.role == "Admin") {
        console.log("admin")
        this.service.checkAdmin = true;
      }
      else {
        this.service.checkAdmin = false;
      }
      this.router.navigateByUrl("/landing-page")
    }
    else {
      
    }

  }
  constructor(private fb: FormBuilder, public service: SharedService, private router: Router) { }
  loginForm = this.fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required]
  })
  ngOnInit(): void {

   
    this.service.showSignOut = false
    this.service.loginBool = false;
    this.service.registerBool = true;


  }

}
