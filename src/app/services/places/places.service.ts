import {Injectable} from '@angular/core';
import {Weather} from '../../models/weather.model';
import {StorageService} from '../storage/storage.service';
import {ReplaySubject} from "rxjs";

export interface Place {
  latitude: number;
  longitude: number;
  name: string;
  homepage: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public detail: Weather = {
    coord: {lon: 28.6473, lat: 28.6473},
    weather: [{id: 800, main: 'Clear', description: 'clear sky', icon: '01d'}],
    base: 'stations',
    main: {
      temp: 21.57,
      feels_like: 21.4,
      temp_min: 21.57,
      temp_max: 21.57,
      pressure: 1019,
      humidity: 62,
      sea_level: 1019,
      grnd_level: 996
    },
    visibility: 10000,
    wind: {speed: 4.04, deg: 357, gust: 5.51},
    clouds: {all: 0},
    dt: 1665644486,
    sys: {country: 'EG', sunrise: 1665633882, sunset: 1665675503},
    timezone: 7200,
    id: 361394,
    name: 'Al Bawīţī',
    cod: 200
  };

  /*
          <option value="lat=-64.8251018&lon=-63.496847">Port Lockroy, Antarctica</option>
          <option value="lat=31.2243085&lon=120.9162955">Shanghai, China</option>
          <option value="lat=35.6735408&lon=139.5703032">Tokyo, Japan</option>
   */

  private privatePlaces: Place[] = [
    {
      latitude: 28.6472799,
      longitude: 28.6472799,
      name: 'Dehli, India',
      homepage: true
    },
    {
      latitude: -5.7759362,
      longitude: 106.1174957,
      name: 'Jakarta, Indonesia',
      homepage: false
    },
    {
      latitude: 51.5287718,
      longitude: -0.2416815,
      name: 'London, UK',
      homepage: false
    },
    {
      latitude: 40.6976701,
      longitude: -74.2598666,
      name: 'New York, USA',
      homepage: false
    },
    {
      latitude: 48.8589507,
      longitude: 2.2770202,
      name: 'Paris, France',
      homepage: false
    },
    {
      latitude: 37.757815,
      longitude: -122.5076401,
      name: 'San Francisco, USA',
      homepage: false
    }
  ];

  private privateServiceSubject = new ReplaySubject<Place[]>(1);

  constructor(
    private storageService: StorageService
  ) {
    this.init();
  }

  get places$() {
    return this.privateServiceSubject.asObservable();
  }

  /**
   * Init places from storage
   */
  async init() {
    let places = await this.storageService.getData('places');
    if (!places) {
      places = this.privatePlaces;
    }
    this.privateServiceSubject.next(places);
  }

  /**
   * Set active on home
   *
   * @param index
   * @param active
   */
  async setHomepage(index: number, active: boolean) {
    this.privatePlaces[index].homepage = active;
    await this.storageService.setData('places', this.privatePlaces);
    this.privateServiceSubject.next(this.privatePlaces);
  }

}
