import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloModalComponent } from './components/hello-modal/hello-modal.component';
import { ByeModalComponent } from './components/bye-modal/bye-modal.component';
import DynamicComponent from './components/dynamic-component';

@NgModule({
  declarations: [
    AppComponent,
    HelloModalComponent,
    ByeModalComponent,
    DynamicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // entryComponents: [HelloModalComponent, ByeModalComponent]
})
export class AppModule {
}
