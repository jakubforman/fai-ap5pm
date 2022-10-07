import {Injectable} from '@angular/core';

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

  constructor() {
  }

  get places(): Place[] {
    return this.privatePlaces;
  }

  setHome(index: number, active: boolean) {
    this.privatePlaces[index].homepage = active;
  }

}
