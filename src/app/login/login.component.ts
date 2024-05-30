import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  email: string = '';
  password: string = '';
  emailErrorMessage: string = '';
  passwordErrorMessage: string = '';
  isEmailValid: boolean = true;  //เก็บสถานะความถูกต้องของอีเมล

  validateEmail() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    this.isEmailValid = emailPattern.test(this.email);
    if(this.email === ''){
      this.emailErrorMessage = 'กรุณากรอกอีเมล';
    }else if (!this.isEmailValid) {
      this.emailErrorMessage = 'กรุณากรอกอีเมลให้ครบถ้วน';
    } else {
      this.emailErrorMessage = '';
    }
  }

  validatePassword() {
    if (this.password === '') {
      this.passwordErrorMessage = 'กรุณากรอกรหัสผ่าน';
    } else if (this.password.length < 8) {
      this.passwordErrorMessage = 'กรุณากรอกรหัสผ่านอย่างน้อย 8 ตัว';
    } else {
      this.passwordErrorMessage = '';   //ถ้ารหัสผ่านถูกต้อง จะตั้งค่า passwordErrorMessage ให้เป็นค่าว่าง
    }
  }

  adduser() {
    this.validateEmail();
    this.validatePassword();

    if (!this.isEmailValid || this.passwordErrorMessage) {
      return;
    }

    this.router.navigate(['/home']);
  }
}
