import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Serviceapi {

  private apiUrl = 'https://worldtimeapi.org/api/timezone';
  private apiuserUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getTimeZones(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getAsia(continent: string): Observable<any> { //ไม่ต้องรอฟังก์ชันอื่นทำเสร็จ ตัวของฟังก์ชันสามารถรันได้เลย
    const url = `https://worldtimeapi.org/api/timezone/${continent}`; //พารามิเตอร์ที่ส่งค่าไปยัง API เส้นนี้
    return this.http.get<any>(url).pipe(
      map(response => {
        return response;
      })
    );
  }
  
  getUser(): Observable<any> {
    return this.http.get<any>(this.apiuserUrl);
  }
  
}
