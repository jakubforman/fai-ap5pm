import {Component} from '@angular/core';
import {ApiService} from '../services/api/api.service';
import {Observable} from 'rxjs';
import {Weather} from '../models/weather.model';
import {ModalController} from '@ionic/angular';
import {SettingsPage} from '../pages/settings/settings.page';
import {PlacesService} from '../services/places/places.service';

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
    private modalCtrl: ModalController,
    private placesService: PlacesService
  ) {
    this.initWeather();
  }

  /**
   * Click event
   */
  openSettings() {
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

    await modal.onWillDismiss(); // wait for dismiss
    // re-init weather
    this.initWeather();
  }

  openDetail(weather: Weather) {
    // set weather detail
    this.placesService.detail = weather;
  }


  /**
   * Init weather for homepage cards
   *
   * @private
   */
  private initWeather() {
    // reset array
    this.weather$ = [];

    // loop all places
    this.placesService.places.forEach(place => {
      if (place.homepage) {
        this.weather$.push(this.apiService.getWeather(place.latitude, place.longitude));
      }
    });
  }
}
