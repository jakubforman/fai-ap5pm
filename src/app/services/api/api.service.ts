import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

export interface WeatherCoord {
  lat: number;
  lon: number;
}

export interface WW {
  description: string;
}

export interface Weather {
  id: number;
  name: string;
  coord: WeatherCoord;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  rain?: {
    // '1h': number;
    [key: string]: number;
  };
  weather: WW[];
  // weather: [WW];
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) {
  }

  /**
   * Get weather from API
   *
   * @param latitude Latitude of GEO
   * @param longitude
   */
  getWeather(latitude: number, longitude: number): Observable<Weather> {
    // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
    const url = environment.api.baseUrl + `/weather?lat=${latitude}&lon=${longitude}&appid=${environment.api.key}`;
    return this.http.get<Weather>(url);
  }
}
