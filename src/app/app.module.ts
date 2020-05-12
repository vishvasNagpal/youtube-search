import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { ClickOutsideDirectiveDirective } from './components/search/click-outside-directive.directive';
import { MouseMoveDirectiveDirective } from './components/search/mouse-move-directive.directive';
import { MouseMoveOutsideDirective } from './components/search/mouse-move-outside.directive';
import { KeyPressDirective } from './components/search/key-press.directive';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ClickOutsideDirectiveDirective,
    MouseMoveDirectiveDirective,
    MouseMoveOutsideDirective,
    KeyPressDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
