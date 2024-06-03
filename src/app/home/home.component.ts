import { Component, OnInit, ViewChild } from '@angular/core';
import { Serviceapi } from '../serviceapi.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogdataComponent } from '../dialog/dialogdata/dialogdata.component';
import * as moment from 'moment-timezone';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface Timezone {
  abbreviation: string;
  datetime: string;
  day_of_week: string;
  day_of_year: string;
  timezone: string;
  utc_datetime: string;
  utc_offset: string;
  week_number: string;
}

export interface Listtime{
  index: number;
  timedata: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private serviceapi: Serviceapi, private dialog: MatDialog) { }

  Listtime: string[] = [];
  AsiaBangkok: string[] = [];
  Continent: string = "";
  Listasia: any[] = [];
  timezoneData: Timezone[] = [];
  Listzone : Listtime [] = [];
  timezone : any [] = [];
  dataSource = new MatTableDataSource<Listtime>([]); //ตัวแปรสำหรับจัดการข้อมูลในตาราง
  displayedColumns: any[] = ['index', 'timedata'];  //ระบุคอลัมน์ที่จะใช้แสดงในตาราง

  @ViewChild(MatPaginator) paginator!: MatPaginator; //เป็นตัวแปรที่ไว้ใช้แบ่งหน้าจอข้อมูล

  ngOnInit(): void {
    this.getTimezoneData();
  }

  ngAfterViewInit() {    //เป็นฟังก์ชันของ angular
    this.dataSource.paginator = this.paginator;
  }

  getTimezoneData() {
    this.serviceapi.getTimeZones()
      .subscribe(response => {
        this.timezone.push(response) 
        this.convertTimezone(this.timezone)
        console.log('response', this.Listtime);
      });
  }

  getAsiaData() {  //แสดงข้อมูลใน popup
    this.serviceapi.getAsia(this.Continent) //ส่งพารามิเตอร์ Continent เข้าไปใน API เมธอด getasia
      .subscribe(response => {
        this.Listasia.push(response);
        console.log(this.Listasia);
        this.convertData(this.Listasia);
        this.Listasia = []; //รองรับการรับข้อมูลใหม่ในครั้งถัดไป
      });
  }

  convertTimezone (timezone: any): void{ //แปลงข้อมูลให้เป็นรูปแบบตาราง
    let _data: any = [];
    console.log(timezone[0])
    console.log(timezone[0].length);
    for(let i = 1 ; i <= timezone[0].length; i++){
      _data.push({
        'index' : i,
        'timedata' : timezone[0][i-1]   //ให้ข้อมูลใน data เท่ากับ 0 ก็เลยต้องนำ i มาลบ 1
      })
    }
    this.dataSource.data = _data
    console.log(this.dataSource.data)
  }
  
  convertData(timezone: any): void {
    let _data: any = '';
    _data = {
      'abbreviation': timezone[0]["abbreviation"] || "",
      'datetime': this.convertDate(timezone[0]["datetime"] || ""),
      'day_of_week': timezone[0]["day_of_week"] || 0,
      'day_of_year': timezone[0]["day_of_year"] || 0,
      'timezone': timezone[0]["timezone"] || "",
      'utc_datetime': this.convertDate(timezone[0]["utc_datetime"] || ""),
      'utc_offset': timezone[0]["utc_offset"] || 0,
      'week_number': timezone[0]["week_number"] || 0,
    };
    this.timezoneData = _data;
    console.log(this.timezoneData);
    this.opendialog(this.timezoneData);
  }

  opendialog(data: any) {
    this.dialog.open(DialogdataComponent, {
      data: data
    });
  }

  convertDate(time: string) {
    console.log(time);
    return moment.parseZone(time).format("DD-MM-YYYY HH:mm:ss");
  }

    title = 'website-satisfaction-survey';
  }
