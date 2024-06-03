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
      psid: '7550857141677622' // คุณต้องหา PSID ของผู้ใช้จากที่ไหนสักที่ เช่น ผ่านการเข้าสู่ระบบหรือเก็บไว้ในแอปพลิเคชันของคุณ
    };

    console.log('Submitting survey data:', surveyData); // เพิ่มการล็อกข้อมูล

    this.http.post('https://be9a-171-97-97-20.ngrok-free.app/submit-survey', surveyData)
      .subscribe(response => {
        console.log('Survey submitted successfully', response);
        this.sendConfirmationMessage('7550857141677622', 'ขอบคุณที่ทำแบบพึงใจของเราค่ะ').subscribe(
          (confirmationResponse) => {
            console.log('Confirmation message sent successfully', confirmationResponse);
          },
          (error) => {
            console.error('Error sending confirmation message', error);
          }
        );
      }, error => {
        console.error('Error submitting survey', error);
      });
  }

  sendConfirmationMessage(psid: string, message: string) {
    const PAGE_ACCESS_TOKEN = 'EAAJpygIudTYBOZBJ1UD6Dq4kjDx6UnfmJIER1C1OceT9SUdkD6vw0BU2PTM4jBIgSEGqD7kf7v6gcizFuWiMM69RuZBfqWmjHoNWPlDsvwbUJxqZBAzcZBZCTi7ukRESi0GLwawZAZCZCpuG57M8mtkMWa57IKAUcKrPyOffeTsEZC7h07ZCJzp1fE0ZC2G4JAGA2MS';
    const url = `https://graph.facebook.com/v20.0/me/messages?access_token=${PAGE_ACCESS_TOKEN}`;
    const body = {
      recipient: { id: psid },
      message: { text: message }
    };

    console.log('Sending confirmation message with payload:', body); // เพิ่มการล็อกข้อมูล

    return this.http.post(url, body);
  }
}
