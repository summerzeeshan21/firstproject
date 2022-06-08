import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DomController } from '@ionic/angular';

interface Theme {
  name: string;
  styles: ThemeStyle[];
}

interface ThemeStyle {
  themeVariable: string;
  value: string;
}

@Injectable({
  providedIn: 'root'
})
export class SettingsServices {

  private themes: Theme[] = [];
  private currentTheme = 0;

  constructor(private domCtrl: DomController, @Inject(DOCUMENT) private document) {

    this.themes = [
      {
        name: 'light',
        styles: [
            { themeVariable: '--bg-color', value: '#ffffff'},
            { themeVariable: '--headerbg', value: '#ffffff'},
            { themeVariable: '--bgcard', value: '#f4f4f4'},
            { themeVariable: '--headingcolor', value: '#544f4f'},
            { themeVariable: '--subheadingcolor', value: '#444'},
            { themeVariable: '--locationlink', value: '#0000ff'},
            { themeVariable: '--tab-color', value: '#fff'},
            { themeVariable: '--iconcolor', value: '#444'},
            { themeVariable: '--tabtext-color', value: '#444'},
            { themeVariable: '--cardborder-color', value: '#cacaca'},
            { themeVariable: '--primary', value: '#444'},
            {themeVariable:  '--labelheader', value:'#444'},
            {themeVariable:  '--ion-color-primary', value:'#7e7e7e'},
            {themeVariable:  '--headerLora-color', value:'#191818'},
        ]
      },
      {
        name: 'dark',
        styles: [
            { themeVariable: '--bg-color', value: '#fff'},
            { themeVariable: '--headerbg', value: '#292929'},
            { themeVariable: '--bgcard', value: '#202020'},
            { themeVariable: '--headingcolor', value: '#adabab'},
            { themeVariable: '--subheadingcolor', value: '#f66387'},
            { themeVariable: '--locationlink', value: '#8c8cd0'},
            { themeVariable: '--tab-color', value: '#504f4f'},
            { themeVariable: '--iconcolor', value: '#7e7e7e'},
            { themeVariable:  '--tabtext-color', value: '#000'},
            { themeVariable: '--cardborder-color', value: '#191818'},
            { themeVariable: '--primary', value: '#504f4f'},
            {themeVariable:  '--labelheader', value:'#000'},
            {themeVariable:  '--ion-color-primary', value:'#7e7e7e'},
            {themeVariable:  '--headerLora-color', value:'#4aa561'}
        ]
      }
    ];

  }

  cycleTheme(): void {

    if(this.themes.length > this.currentTheme + 1){
      this.currentTheme++;
    } else {
      this.currentTheme = 0;
    }

    this.setTheme(this.themes[this.currentTheme].name);

  }

  setTheme(name): void {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const theme = this.themes.find(theme => theme.name === name);

    this.domCtrl.write(() => {
      if(theme){
         theme.styles.forEach(style => {
          document.documentElement.style.setProperty(style.themeVariable, style.value);
        });
      }
    });

  }

}
