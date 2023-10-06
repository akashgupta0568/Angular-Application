import { Component } from '@angular/core';
import { CMServiceService } from '../CommonService/cmservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userList:any ; 

  constructor(private commonServic: CMServiceService){

  }
  login(){
    // this.commonServic.TostMessage("Login Suceessfully");
    console.log("Api Calling");
    this.commonServic.GetData();
    // .subscribe(
    //   (response:any) =>{
    //     this.userList = response;
    //     console.log(this.userList);
    //   }
    // )
  }
}
