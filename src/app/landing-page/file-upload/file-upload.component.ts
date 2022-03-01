import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  myfile!: any
  constructor(private fb: FormBuilder,public service: SharedService) { }
  fileUploadForm = this.fb.group({
    
    file: [{ value: '',  }, Validators.required]
    
  })
  ngOnInit(): void {
  }


onFileChange(event: any) {
  this.myfile = event.target.files[0];
  


}
onSubmit() {
  const fd = new FormData();
  fd.append('file', this.myfile);
  this.service.fileUpload(fd)
  .subscribe(

    response => this.onResponse(response),
    error => this.onError(error),
    


  )
}
onError(error:any){
  
}
onResponse(response: any): void {
  
  this.fileUploadForm.reset()

  
  if (response.StatusData == "success") {
    alert(response.Email)
    console.log(response.Email)
  } 

}
}