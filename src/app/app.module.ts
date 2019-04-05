import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VideoComponent } from './video/video.component';
import { VideoService } from './video/video.service';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, VideoComponent, LoginComponent],
  imports: [
    BrowserModule,
    HttpModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [VideoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
