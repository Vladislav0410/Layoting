import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { TesterPageComponent } from './pages/tester-page/tester-page.component';
import { HeaderComponent } from './component/header/header.component';
import { ButtonComponent } from './elements/button/button.component';
import { SignUpComponent } from './elements/sign-up/sign-up.component';
import { ArrowComponent } from './elements/arrow/arrow.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    TesterPageComponent,
    HeaderComponent,
    ButtonComponent,
    SignUpComponent,
    ArrowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
