import {Component} from '@angular/core';
import {ApiService} from '../services/api/api.service';
import {Observable} from 'rxjs';
import {Weather} from '../models/weather.model';
import {SettingsPage} from '../pages/settings/settings.page';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  /**
   * Custom observable array
   */
  weather$: Observable<Weather>[] = [];

  constructor(
    // get custom Service from DI
    private apiService: ApiService,
    private modalCtrl: ModalController
  ) {
    // push (GEO Zlín - Tečovice)
    this.weather$.push(this.apiService.getWeather(49.2310213, 17.6064677));
    // push (GEO Brno - Tečovice)
    this.weather$.push(this.apiService.getWeather(49.2020489, 16.5079213));
  }

  /**
   * Click event
   */
  openSettings() {
    // create modal
    this.openModal();
  }

  /**
   * Open Ionic modal
   */
  async openModal() {
    const modal = await this.modalCtrl.create({
      component: SettingsPage,
    });

    await modal.present();

    // On will dismiss event
    /*
    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.message = `Hello, ${data}!`;
    }*/
  }
}
