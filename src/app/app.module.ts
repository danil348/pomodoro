import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TimerComponent } from './components/timer/timer.component';
import { TimerSettingsComponent } from './components/timer/components/timer-settings/timer-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    TimerSettingsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
