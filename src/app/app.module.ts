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
import { ArtComponent } from './component/art/art.component';
import { DescriptionPageComponent } from './pages/description-page/description-page.component';
import { InfoPageComponent } from './pages/info-page/info-page.component';
import { CommentPageComponent } from './pages/comment-page/comment-page.component';
import { TeacherPageComponent } from './pages/teacher-page/teacher-page.component';
import { LinearComponent } from './elements/linear/linear.component';
import { CardComponent } from './component/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    TesterPageComponent,
    HeaderComponent,
    ButtonComponent,
    SignUpComponent,
    ArrowComponent,
    ArtComponent,
    DescriptionPageComponent,
    InfoPageComponent,
    CommentPageComponent,
    TeacherPageComponent,
    LinearComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
