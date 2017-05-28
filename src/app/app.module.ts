import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing'
import { LoginComponent } from './login/login.component';
import { WallComponent } from './wall/wall.component';

import { FBService } from './services/fb.service';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WallComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    FBService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
