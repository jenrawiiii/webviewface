import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private router: Router) { }

  title = 'register'; 
  first: string = '';
  last: string = '';
  age: string = '';
  gender: string = '';
  email: string = '';
  phone: string = '';
  pass: string = '';
  confirm_pass: string = '';
  errormessage: string = '';
  emailErrorMessage: string = '';
  passwordErrorMessage: string = '';
  confirmPasswordErrorMessage: string = '';
  phoneErrorMessage: string = '';
  firstErrorMessage: string = '';
  lastErrorMessage: string = '';
  ageErrorMessage: string = '';
  genderErrorMessage: string = '';
  isEmailValid: boolean = true;

  numberOnly(event: KeyboardEvent) {
    const inputChar = String.fromCharCode(event.keyCode);
    const pattern = /[0-9]/;
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  validateEmail() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    this.isEmailValid = emailPattern.test(this.email);
    if(this.email === ''){
      this.emailErrorMessage = 'กรุณากรอกอีเมล';
    } else if (!this.isEmailValid) {
      this.emailErrorMessage = 'กรุณากรอกอีเมลให้ครบถ้วน';
    } else {
      this.emailErrorMessage = '';
    }
  }

  validatePassword() {
    if (this.pass === '') {
      this.passwordErrorMessage = 'กรุณากรอกรหัสผ่าน';
    } else if (this.pass.length < 8) {
      this.passwordErrorMessage = 'กรุณากรอกรหัสผ่านอย่างน้อย 8 ตัว';
    } else {
      this.passwordErrorMessage = '';
    }
  }

  validateConfirmPassword() {
    if (this.confirm_pass === '') {
      this.confirmPasswordErrorMessage = 'กรุณากรอกยืนยันรหัสผ่าน';
    } else if (this.pass !== this.confirm_pass) {
      this.confirmPasswordErrorMessage = 'รหัสผ่านไม่ตรงกัน';
    } else {
      this.confirmPasswordErrorMessage = '';
    }
  }

  validatePhone() {
    if (this.phone === '') {
      this.phoneErrorMessage = 'กรุณากรอกหมายเลขโทรศัพท์';
    } else if (this.phone.length !== 10) {
      this.phoneErrorMessage = 'กรุณากรอกหมายเลขโทรศัพท์ให้ครบ 10 หลัก';
    } else {
      this.phoneErrorMessage = '';
    }
  }

  validateFirst() {
    if (this.first === '') {
      this.firstErrorMessage = 'กรุณากรอกชื่อ';
    } else {
      this.firstErrorMessage = '';
    }
  }

  validateLast() {
    if (this.last === '') {
      this.lastErrorMessage = 'กรุณากรอกนามสกุล';
    } else {
      this.lastErrorMessage = '';
    }
  }

  validateGender() {
    if (this.gender === '') {
      this.genderErrorMessage = 'กรุณาเลือกเพศ';
    } else {
      this.genderErrorMessage = '';
    }
  }

  validateAge() {
    if (this.age === '') {
      this.ageErrorMessage = 'กรุณากรอกอายุ';
    } else if (isNaN(Number(this.age)) || Number(this.age) <= 0) {
      this.ageErrorMessage = 'กรุณากรอกอายุให้ถูกต้อง';
    } else {
      this.ageErrorMessage = '';
    }
  }

  validateFields() {
    let Null: string[] = [];

    if (!this.first) Null.push('first');
    if (!this.last) Null.push('last');
    if (!this.age) Null.push('age');
    if (!this.gender) Null.push('gender');
    if (!this.email) Null.push('email');
    if (!this.phone) Null.push('phone');
    if (!this.pass) Null.push('Password');
    if (!this.confirm_pass) Null.push('confirm_pass');

    this.errormessage = Null.length > 0 ? 'กรุณากรอกข้อมูล: ' + Null.join(', ') : '';
  }

  adduser() { //เรียกใช้เมธอดตรวจสอบข้อมูลทั้งหมด
    this.validateFields();
    this.validateEmail();
    this.validatePassword();
    this.validateConfirmPassword();
    this.validatePhone();
    this.validateFirst();
    this.validateLast();
    this.validateGender();
    this.validateAge();

    if (this.errormessage || !this.isEmailValid || this.passwordErrorMessage || this.confirmPasswordErrorMessage || this.phoneErrorMessage || this.firstErrorMessage || this.lastErrorMessage || this.genderErrorMessage || this.ageErrorMessage) {
      return;
    }

    alert('Pass!');
    this.router.navigate(['/login']);

    this.errormessage = '';
  }

  clearForm() {
    this.first = '';
    this.last = '';
    this.age = '';
    this.gender = '';
    this.email = '';
    this.phone = '';
    this.pass = '';
    this.confirm_pass = '';
    this.errormessage = '';
    this.emailErrorMessage = '';
    this.passwordErrorMessage = '';
    this.confirmPasswordErrorMessage = '';
    this.phoneErrorMessage = '';
    this.firstErrorMessage = '';
    this.lastErrorMessage = '';
    this.genderErrorMessage = '';
    this.ageErrorMessage = '';
  }

  clearForms() {
    this.pass = '';
    this.confirm_pass = '';
  }
}
