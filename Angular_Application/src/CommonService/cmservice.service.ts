import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

   GetData(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', // You can add more headers as needed
      Authorization: 'Bearer YourAccessTokenHere', // Example: Authorization header with a token
    });
    return this.http.get('https://localhost:7145/api/UserRegistrations',{headers});
   }

   postData(Data:any){
    return this.http.post(this.baseUrl + "UserRegistrations" , Data);
   }
}
