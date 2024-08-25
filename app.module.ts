import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; // Import RouterModule

import { AppComponent } from './app.component';
import { BfhlComponent } from './bfhl/bfhl.component';
import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    BfhlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule // Add RouterModule here
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
