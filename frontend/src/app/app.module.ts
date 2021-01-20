import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { de_DE } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import de from '@angular/common/locales/de';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { VoteViewComponent } from './pages/vote-view/vote-view.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { NzGridModule } from 'ng-zorro-antd/grid';
registerLocaleData(de);
const config: SocketIoConfig = { url: 'http://localhost:3000', options: {
  cors: {origin: true}
} };

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    VoteViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SocketIoModule.forRoot(config),
    NgbModule,
    NzInputModule,
    NzGridModule,
    NzButtonModule,
    NzFormModule
  ],
  providers: [{ provide: NZ_I18N, useValue: de_DE }],
  bootstrap: [AppComponent]
})
export class AppModule { }
