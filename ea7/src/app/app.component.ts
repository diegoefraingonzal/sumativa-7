import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home/home.page';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonicModule, HomePage],
  template: '<app-home></app-home>',
})
export class AppComponent {}
