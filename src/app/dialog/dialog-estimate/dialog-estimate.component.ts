import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog-estimate',
  templateUrl: './dialog-estimate.component.html',
  styleUrls: ['./dialog-estimate.component.css']
})
export class DialogEstimateComponent {
  questions = [
    { label: 'ท่านพึงพอใจในเว็บไซต์มากน้อยเพียงใด?' },
    { label: 'ท่านรู้สึกว่าเว็บไซต์ใช้งานง่ายหรือไม่?' },
    { label: 'ท่านมีความพึงพอใจกับการออกแบบของเว็บไซต์หรือไม่?' },
    { label: 'ท่านคิดว่าเว็บไซต์มีความรวดเร็วในการโหลดหรือไม่?' },
    { label: 'ท่านจะแนะนำเว็บไซต์นี้ให้ผู้อื่นหรือไม่?' }
  ];
  options = ['มาก', 'ปานกลาง', 'น้อย', 'ไม่เลย'];
  responses = [];

  constructor(private http: HttpClient) {}

  onSubmit() {
    const data = {
      responses: this.responses
    };

    this.http.post('http://localhost:3000/send-messenger', data)
      .subscribe(response => {
        console.log('Response from server', response);
      }, error => {
        console.error('Error', error);
      });
  }
}
