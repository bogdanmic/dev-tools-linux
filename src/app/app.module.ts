import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material.module';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { SetupStartComponent } from './setup-start/setup-start.component';
import { ToastNotificationComponent } from './toast-notification/toast-notification.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusBarComponent,
    SetupStartComponent,
    ToastNotificationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppMaterialModule,
    FormsModule
  ],
  entryComponents: [ToastNotificationComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
