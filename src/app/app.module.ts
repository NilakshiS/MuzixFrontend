import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule, RoutingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogoComponent } from './logo/logo.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FooterComponent } from './footer/footer.component';
import { DialogOverviewExampleDialogComponent } from './icon-tray/icon-tray.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material';
import {TrackService} from './track.service';
import {HttpClientModule} from '@angular/common/http';
import { IconTrayComponent } from './icon-tray/icon-tray.component';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    SearchBarComponent,
    FooterComponent,
    IconTrayComponent,
    DialogOverviewExampleDialogComponent,
    RoutingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule
  ],
  entryComponents: [DialogOverviewExampleDialogComponent],
  providers: [TrackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
