import {ApplicationRef, DoBootstrap, Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SimpleTextComponent } from './simple-text/simple-text.component';
import {createCustomElement} from "@angular/elements";

@NgModule({
  declarations: [
    SimpleTextComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: []
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap(appRef: ApplicationRef) {
    const el = createCustomElement(SimpleTextComponent, {injector: this.injector});
    const pluginName = 'plugin-basic-text'
    customElements.get(pluginName) || customElements.define(pluginName, el);
  }
}
