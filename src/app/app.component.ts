import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  constructor(){
    window.onbeforeunload = function(e) {
      localStorage.removeItem('fb_auth');
    };
  }
}
