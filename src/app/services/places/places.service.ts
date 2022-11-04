import {Injectable} from '@angular/core';
import {Weather} from '../../../models/weather.model';
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

  detail: Weather = {
    coord: {lon: 28.6473, lat: 28.6473},
    weather: [{id: 800, main: 'Clear', description: 'clear sky', icon: '01d'}],
    base: 'stations',
    main: {
      temp: 300.58,
      feels_like: 299.85,
      temp_min: 300.58,
      temp_max: 300.58,
      pressure: 1012,
      humidity: 30,
      sea_level: 1012,
      grnd_level: 990
    },
    visibility: 10000,
    wind: {speed: 5.76, deg: 326, gust: 6.16},
    clouds: {all: 2},
    dt: 1665751366,
    sys: {country: 'EG', sunrise: 1665720317, sunset: 1665761839},
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
      homepage: true,
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

  private privatePlacesSubject = new ReplaySubject<Place[]>(1);

  constructor(
    private storageService: StorageService
  ) {
    // init
    this.storageService.getData('places').then(places => {
      if (!places) {
        places = this.privatePlaces;
      }
      this.privatePlacesSubject.next(places);
    });
  }

  get places$() {
    return this.privatePlacesSubject.asObservable();
  }

  /**
   * @deprecated
   */
  get places(): Place[] {
    return this.privatePlaces;
  }

  setHome(index: number, active: boolean) {
    this.privatePlaces[index].homepage = active;
    // store data
    this.storageService.saveData('places', this.privatePlaces);
    this.privatePlacesSubject.next(this.privatePlaces);
  }

}
