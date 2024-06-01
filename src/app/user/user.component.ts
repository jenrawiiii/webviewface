import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor(private serviceapi: Serviceapi,
  private http: HttpClient  // ตรงนี้เพิ่ม HttpClient
  ){}  

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
        // เรียกใช้งาน sendMessage() เมื่อได้รับข้อมูลผู้ใช้สำเร็จ
        this.sendMessage();
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

  sendMessage() {
    // เรียกใช้ API ของ Messenger ส่งข้อความไปยังบอท
    this.http.post<any>('https://graph.facebook.com/v20.0/me/messages', {
      recipient: { id: '7550857141677622' }, // แทน sender_psid ด้วย PSID ที่ถูกต้อง
      message: { text: 'สวัสดีค่ะ คุณต้องการให้ช่วยอะไร?' }
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'EAAJpygIudTYBOwTRBzgcrliVBJTZA1K7n7O7Ekj0vV3V7AJF5LD4J7O4j5H922hhypMD8ZB2N46HHdsFhZCNK2lwFoFMFcYXcOz4VB99kUILfGavQjx5ZCMfdFLZAtpFNBQz99xTcpTUNxxVevxX6QR4BNWP4ePvIGeq6gjhHICwQD97FZC9k7f54ijj4Ne2ZAg' // แทน YOUR_ACCESS_TOKEN ด้วย Access Token ที่ถูกต้อง
      }
    })
    .subscribe(response => {
      console.log('Message sent to bot:', response);
      alert('ข้อความถูกส่งไปยังบอทแล้ว!');
    }, error => {
      console.error('Failed to send message:', error);
      alert('มีข้อผิดพลาดเกิดขึ้นในการส่งข้อความ');
    });
  }
  

}
