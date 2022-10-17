import {Component} from '@angular/core';
import {ApiService} from '../services/api/api.service';
import {Observable} from 'rxjs';
import {Weather} from '../models/weather.model';
import {SettingsPage} from '../pages/settings/settings.page';
import {ModalController} from '@ionic/angular';
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
    // TODO: async subscribe for change register
    // TODO: remove all from array before each (push() issue) in subscribe
    this.placesService.places.forEach(place => {
      if (place.homepage) {
        this.weather$.push(this.apiService.getWeather(place.latitude, place.longitude));
      }
    });
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
    // TODO: on will dismiss reload data
    /*
    const { data, role } = await modal.onWillDismiss();

    // other way
    /*this.apiService.getWeather(49.2310213, 17.6064677).subscribe(data => {
      this.weather = data // need modified implementation in view
    });*/
  }

  openDetail(weather: Weather) {
    // push data to service
    this.placesService.detail = weather;
    // open route in attr routeLink
  }
}
