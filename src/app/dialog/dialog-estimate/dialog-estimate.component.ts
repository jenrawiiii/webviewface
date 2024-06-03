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

  onSubmit() {
    console.log('Responses:', this.responses);
    this.isDialogOpen = false; // ปิดป๊อปอัพหลังจากกด submit
    // เพิ่ม logic เพื่อจัดการการส่งฟอร์ม เช่น ส่งข้อมูลไปยัง server
  }
}
