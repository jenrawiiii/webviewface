import { Component } from '@angular/core';
import { Serviceapi } from '../serviceapi.service';

export interface User {
  name: string;
  username: string;
  email: string;
  phone: string;
  city: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(private serviceapi: Serviceapi){}  

  User: string[] = [];
  Listuser: User[] = [];

  ngOnInit(): void {
    this.getuserapi();
  }

  getuserapi(){
    this.serviceapi.getUser().subscribe((response: any)=>{
      console.log(response);
      this.User.push(response);
      this.convertUser(this.User);
    })
  }

  convertUser (user: any): void{
    let _data: any = [];
    console.log(user[0][1].name)
    console.log(user[0].length);
    for(let i = 1 ; i <= user[0].length; i++){
      _data.push({
        'name' : user[0][i-1]["name"] || "",
        'username': user[0][i-1]["username"] || "", 
        'email': user[0][i-1]["email"]|| "",
        'phone': user[0][i-1]["phone"]|| "",
        'city': user[0][i-1]["address"]["city"]|| "",
      })
    }
    this.Listuser = _data
    console.log(this.Listuser)
  }
}
