import { Component } from '@angular/core';
import { CMServiceService } from '../CommonService/cmservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userList:any ; 
  ShowHide:boolean = false;
  constructor(private commonServic: CMServiceService, private route:Router){
    
  }
  login(event:any){
    // this.commonServic.TostMessage("Login Suceessfully");
    event.preventDefault();
    this.commonServic.GetData().subscribe((res)=>{
      console.log(res);
    });
    console.log("Api Calling");
  }

  showhide(){
    this.ShowHide=!this.ShowHide;
  }

  // forgetpassword(){
  //   this.route.navigateByUrl('/forgetPassword');
  // }
}

