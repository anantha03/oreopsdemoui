import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
//readonly APIUrl ="http://golang-backend-service.golang-backend/api/apps/v1/api"; 
//docker build -t ananthayyaswamy03/angular-new-proxy:v6 .
//readonly APIUrl = "http://20.62.223.168:3000/api"
readonly APIUrl = "http://52.224.151.240:3000/api"

//readonly APIUrl = "http://localhost:3000/api"
//\http://40.76.156.191:3000/api
loginBool: boolean = false;
  registerBool: boolean = false;
  landingPageBool: boolean = false;
  showSignOut: boolean = false;
  checkAdmin: boolean = false;
  IsloginBool: boolean = false
  constructor(private http:HttpClient) { }

  getTitle():Observable<any>{
    return this.http.get<any>(this.APIUrl+'/title');
  }
signUp(userData:any):Observable<any>{
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
