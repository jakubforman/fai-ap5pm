import {Component} from '@angular/core';
import {ApiService, Weather} from '../services/api/api.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  /**
   * Weather data
   */
  weather$: Observable<Weather>;

  constructor(
    // get custom Service from DI
    private apiService: ApiService
  ) {
    // set property (GEO Zlín - Tečovice)
    this.weather$ = this.apiService.getWeather(49.2310213, 17.6064677);

    // other way
    /*this.apiService.getWeather(49.2310213, 17.6064677).subscribe(data => {
      this.weather = data // need modified implementation in view
    });*/
  }

}
