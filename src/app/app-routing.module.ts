import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackCardComponent } from './track-card/track-card.component';
import { EditTrackComponent } from './edit-track/edit-track.component';


const routes: Routes = [
  {path: '', component: TrackCardComponent},
  {path: 'edit', component: EditTrackComponent},
  {path: 'search/:track', component: TrackCardComponent},
  {path: 'myplaylist', component: TrackCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [TrackCardComponent, EditTrackComponent];
