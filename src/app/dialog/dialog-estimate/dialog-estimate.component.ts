import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

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

  options = [
    'พึงพอใจมาก',
    'พึงพอใจ',
    'ปานกลาง',
    'ไม่พึงพอใจ',
    'ไม่พึงพอใจเลย'
  ];

  responses = Array(this.questions.length).fill('');

  constructor(private http: HttpClient) {}

  onSubmit() {
    const surveyData = {
      responses: this.responses,
      psid: '7550857141677622'  // คุณต้องหา PSID ของผู้ใช้จากที่ไหนสักที่ เช่น ผ่านการเข้าสู่ระบบหรือเก็บไว้ในแอปพลิเคชันของคุณ
    };

    this.http.post('http://localhost:3000/submit-survey', surveyData)
      .subscribe(response => {
        console.log('Survey submitted successfully');
      }, error => {
        console.error('Error submitting survey', error);
      });

    this.isDialogOpen = false; // ปิด dialog หลังจากส่งฟอร์มเรียบร้อย
  }
}
