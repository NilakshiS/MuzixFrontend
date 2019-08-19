import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {MatIcon} from '@angular/material';
import {TrackService} from '../track.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ITrack} from '../track';

@Component({
  selector: 'app-icon-tray',
  templateUrl: './icon-tray.component.html',
  styleUrls: ['./icon-tray.component.css']
})
export class IconTrayComponent implements OnInit {

  @Input() icons;
  @Input() parentTrack;
  @Output() public childEvent = new EventEmitter();

  constructor(private trackService: TrackService, private snackBar: MatSnackBar, private router: Router, public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  onClick(iconButton: MatIcon) {
    switch (iconButton._elementRef.nativeElement.innerHTML) {
      case 'edit': {
        this.openDialog();
        break;
      }
      case 'favorite': {
        console.log(this.parentTrack);
        this.trackService.addTrack(this.parentTrack).subscribe((response: any) => {
          this.snackBar.open('Track added', 'okay', {
            duration: 3000,
          });
          this.parentTrack.exists = true;
        });
        break;
      }
      case 'delete': {
        console.log(this.parentTrack);
        this.trackService.deleteTrack(this.parentTrack).subscribe((response: any) => {
          this.snackBar.open('Track deleted', 'okay', {
            duration: 3000,
          });
          this.router.navigate(['/myplaylist']);
          this.childEvent.emit();
        });
        break;
      }
    }

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '250px',
      data: {
        trackName: this.parentTrack.trackName,
        trackArtist: this.parentTrack.trackArtist,
        trackComments: this.parentTrack.trackComments,
        trackImage: this.parentTrack.trackImage
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.parentTrack.trackComments = result;
        this.trackService.updateTrack(this.parentTrack).subscribe((response: any) => this.snackBar.open('Track updated', 'okay', {
          duration: 3000,
        }));
      }
    });
  }
}

@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ITrack) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
