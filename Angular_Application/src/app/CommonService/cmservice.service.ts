import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CMServiceService {

  baseUrl:string = "https://localhost:7145/api/"

  constructor( private http: HttpClient) {
    console.log("Login Component");
   }

   TostMessage(value:any){
    alert(value)
   }

   GetData(): void{
     this.http.get("https://localhost:7145/api/UserRegistrations").subscribe(
      (Response:any )=>{
        console.log(Response);
      },(error)=>{
        console.log(error);
      }
      
     );
   }

   postData(Data:any){
    return this.http.post(this.baseUrl + "UserRegistrations" , Data);
   }
}
