import {
  SmallWorldComponent,
  HeaderComponent,
  AsideComponent,
  MainContentComponent
} from './smallworld.components';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    SmallWorldComponent,
    HeaderComponent,
    AsideComponent,
    MainContentComponent
      ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
  ],
  providers: [DatePipe],
  bootstrap: [SmallWorldComponent],
})
export class SmallWorldModule {}
