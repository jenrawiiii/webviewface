import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogEstimateComponent } from '../dialog-estimate/dialog-estimate.component';

@Component({
  selector: 'app-dialogdata',
  templateUrl: './dialogdata.component.html',
  styleUrls: ['./dialogdata.component.css']
})
export class DialogdataComponent {
constructor(public dialogRef: MatDialogRef<DialogdataComponent>,@Inject(MAT_DIALOG_DATA) public data: any,
private dialog: MatDialog
){
}

ngOnInit(): void {
  console.log(this.data.timezone);
}

closeDialog() {
  this.dialogRef.close();
  this.dialogRef.afterClosed().subscribe(() => {
    this.dialog.open(DialogEstimateComponent, {
      width: '500px'
    });
  });
}
}