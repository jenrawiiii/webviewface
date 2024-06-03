import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dialog-estimate',
  templateUrl: './dialog-estimate.component.html',
  styleUrls: ['./dialog-estimate.component.css']
})
export class DialogEstimateComponent {
  isDialogOpen = true;
  questions = [
    { label: 'ท่านรู้สึกว่าเว็บไซต์ของเราง่ายต่อการใช้งานและนำทางหรือไม่?' },
    { label: 'ท่านพึงพอใจกับการออกแบบและหน้าตาของเว็บไซต์หรือไม่?' },
    { label: 'ท่านรู้สึกว่าเว็บไซต์ของเรามีความเร็วในการโหลดเพียงพอหรือไม่?' },
    { label: 'ท่านรู้สึกว่าข้อมูลที่ให้บริการบนเว็บไซต์มีความชัดเจนและครบถ้วนเพียงพอหรือไม่?' },
    { label: 'ท่านพึงพอใจกับการตอบสนองของเว็บไซต์เมื่อท่านมีปัญหาหรือข้อสงสัยหรือไม่?' }
  ];

  options = ['มาก', 'ปานกลาง', 'น้อย', 'ไม่เลย'];
  responses = [];

  constructor(private http: HttpClient) {}

  onSubmit() {
    const data = {
      responses: this.responses
    };

    this.http.post('https://be9a-171-97-97-20.ngrok-free.app/submit-survey/submit-survey', data)
    .subscribe(response => {
      console.log('Response from server', response);
    }, error => {
      console.error('Error', error);
    });
}
}
