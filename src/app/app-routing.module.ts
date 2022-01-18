import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FileUploadComponent } from './landing-page/file-upload/file-upload.component';
const routes: Routes = [{path :'login',component:LoginComponent },{path :'home',component:AppComponent },{path :'register',component:RegisterComponent },{path :"landing-page" ,component:FileUploadComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
