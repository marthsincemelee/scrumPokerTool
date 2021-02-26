import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { de_DE } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import de from '@angular/common/locales/de';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { VoteViewComponent } from './pages/vote-view/vote-view.component';
import { SocketIoModule, SocketIoConfig } from '@hochdreih/ngx-socket-io-3';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { VoteSelectionComponent } from './pages/vote-selection/vote-selection.component';
import { SetUsernameModalComponent } from './pages/set-username-modal/set-username-modal.component';
import { CurrentPlayerTagComponent } from './pages/current-player-tag/current-player-tag.component';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzListModule } from 'ng-zorro-antd/list';
import { ResultComponent } from './pages/result/result.component';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzMessageModule } from 'ng-zorro-antd/message';
import {environment} from '../environments/environment';
import {NgxChartsModule} from '@swimlane/ngx-charts';



registerLocaleData(de);
const config: SocketIoConfig = { url: environment.backendURL, options: {
  cors: {origin: true}
} };

@NgModule({
  declarations: [
    AppComponent,
    VoteViewComponent,
    VoteSelectionComponent,
    SetUsernameModalComponent,
    CurrentPlayerTagComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SocketIoModule.forRoot(config),
    NgbModule,
    NzInputModule,
    NzCardModule,
    NzMessageModule,
    NzListModule,
    NzIconModule,
    NzLayoutModule,
    NzStatisticModule,
    NzTagModule,
    NzModalModule,
    NzGridModule,
    NzButtonModule,
    NzFormModule,
    ReactiveFormsModule,
    NgxChartsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: de_DE }],
  bootstrap: [AppComponent]
})
export class AppModule { }
