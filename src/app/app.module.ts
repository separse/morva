import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbButtonModule, NbCardModule, NbSidebarModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { D3TestComponent } from './d3-test/d3-test.component';
import { AngularDropdownModule } from 'angular-dropdown';

@NgModule({
  declarations: [
    AppComponent,
    D3TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbButtonModule,
    NbCardModule,
    NbSidebarModule.forRoot(),
    AngularDropdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
