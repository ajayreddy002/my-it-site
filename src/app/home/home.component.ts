import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  animal: any;
  name: any;
  constructor(private dialog: MatDialog) {}
  openDialog(a:any) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {name: this.name, animal: this.animal, src:a},
      width:"500px",
      height:"500px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
