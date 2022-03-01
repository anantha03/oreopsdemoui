import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService implements OnInit{
Backend_IP="";
  ngOnInit(): void {
      this.Backend_IP=environment.Backend_IP;
  }

//readonly APIUrl = "http://40.74.177.35:3000/api"

// readonly APIUrl = this.Backend_IPhttp://40.74.177.35/

readonly APIUrl = "http://localhost:3000/api"//40.74.177.35

loginBool: boolean = false;
  registerBool: boolean = false;
  landingPageBool: boolean = false;
  showSignOut: boolean = false;
  checkAdmin: boolean = false;
  IsloginBool: boolean = false
  constructor(private http:HttpClient) { }

  getTitle():Observable<any>{
    console.log("api url=",this.APIUrl)
    return this.http.get<any>(this.APIUrl+'/title');
  }
signUp(userData:any):Observable<any>{
  console.log(userData)
  return this.http.post<any>(this.APIUrl+'/sign-up',userData);
}
login(userData: any): Observable<any> {
  return this.http.post<any>(this.APIUrl + '/login', userData);
}

fileUpload(fileData: any): Observable<any> {
  console.log("fileupload servive")

  return this.http.post<any>(this.APIUrl + '/file-upload', fileData);
}
 }
