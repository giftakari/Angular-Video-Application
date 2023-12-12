import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { VideoUploadComponent } from './video-upload/video-upload.component';
import { VideoDisplayComponent } from './video-display/video-display.component';

const routes: Routes = [
  {path: '', component:LoginComponent },
  {path:"uplolad", component: VideoUploadComponent},
  { path: 'display', component: VideoDisplayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
