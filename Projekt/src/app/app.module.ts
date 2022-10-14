import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FrameComponent } from './frame/frame.component';
import {MatCommonModule}  from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FrameComponent,
    
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCommonModule,
    MatSidenavModule,
    MatTabsModule,
    MatIconModule,
    MatMenuModule

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
