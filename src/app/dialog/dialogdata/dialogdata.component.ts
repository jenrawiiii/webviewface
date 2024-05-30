import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogdata',
  templateUrl: './dialogdata.component.html',
  styleUrls: ['./dialogdata.component.css']
})
export class DialogdataComponent {
constructor(public dialogRef: MatDialogRef<DialogdataComponent>,@Inject(MAT_DIALOG_DATA) public data: any){
}

ngOnInit(): void {
  console.log(this.data.timezone);
}
}