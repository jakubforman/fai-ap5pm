import {Injectable} from '@angular/core';
import {Weather} from '../../models/weather.model';
import {StorageService} from '../storage/storage.service';
import {ReplaySubject} from 'rxjs';

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


  /*
          <option value="lat=-64.8251018&lon=-63.496847">Port Lockroy, Antarctica</option>
          <option value="lat=31.2243085&lon=120.9162955">Shanghai, China</option>
          <option value="lat=35.6735408&lon=139.5703032">Tokyo, Japan</option>
   */

  detail: Weather = {
    visibility: '',
    coord: {lon: 28.6473, lat: 28.6473},
    weather: [{id: 800, main: 'Clear', description: 'clear sky', icon: '01d'}],
    base: 'stations',
    main: {
      temp: 26.99,
      feels_like: 26.58,
      temp_min: 26.99,
      temp_max: 26.99,
      pressure: 1017,
      humidity: 34,
      sea_level: 1017,
      grnd_level: 995
    },
    // visibility: 10000,
    wind: {speed: 5.18, deg: 356, gust: 5.4},
    clouds: {all: 0},
    dt: 1665410028,
    sys: {country: 'EG', sunrise: 1665374579, sunset: 1665416500},
    timezone: 7200,
    id: 361394,
    name: 'Al Bawīţī',
    cod: 200
  };

  /**
   * Hold all places
   *
   * @private
   */
  private privatePlaces: Place[] = [
    {
      latitude: 28.6472799,
      longitude: 28.6472799,
      name: 'Dehli, India',
      homepage: true,
    },
    {
      latitude: -5.7759362,
      longitude: 106.1174957,
      name: 'Jakarta, Indonesia',
      homepage: false,
    },
    {
      latitude: 51.5287718,
      longitude: -0.2416815,
      name: 'London, UK',
      homepage: true,
    },
    {
      latitude: 40.6976701,
      longitude: -74.2598666,
      name: 'New York, USA',
      homepage: false,
    },
    {
      latitude: 48.8589507,
      longitude: 2.2770202,
      name: 'Paris, France',
      homepage: false,
    },
    {
      latitude: 37.757815,
      longitude: -122.5076401,
      name: 'San Francisco, USA',
      homepage: false,
    }
  ];

  /**
   * Hold places
   *
   * @private
   */
  private privatePlacesSubject = new ReplaySubject<Place[]>(1);

  constructor(
    private storageService: StorageService
  ) {
    this.storageService.getData('places').then(places => {
      this.privatePlacesSubject.next(places);
    });
  }

  get places$() {
    return this.privatePlacesSubject.asObservable();
  }

  /**
   * Get all places
   *
   * @deprecated Use places$
   */
  get places(): Place[] {
    return this.privatePlaces;
  }

  /**
   * Set active on home
   *
   * @param index
   * @param active
   */
  async setHome(index: number, active: boolean) {
    this.privatePlaces[index].homepage = active;
    this.privatePlacesSubject.next(this.privatePlaces);
    await this.storageService.saveData('places', this.privatePlaces);
  }

}
