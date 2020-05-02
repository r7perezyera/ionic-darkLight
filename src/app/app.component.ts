import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.checkDarkThemePrefs();
    });
  }

  // check user's theme preferences
  checkDarkThemePrefs() {
    /*
    lo ideal seria que esto se colocara en un servicio tho...
    */
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    console.log(prefersDark.matches);
    if (prefersDark.matches) {
      document.body.classList.toggle('dark');
    }
  }
}
