import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  name: any;
  constructor(private dialog: MatDialog) {}
  openDialog(a:any) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {name: this.name, src:a},
      width:"400px",
      height:"400px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.name = result;
    });
  }

}
