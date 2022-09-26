import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface WeatherCoord{
  lon: number;
  lat: number;
}

export interface Weather {
  id: number;
  name: string;
  cod: number;
  base: string;
  weather: { description: string }[];
  clouds: {
    all: number;
  };
  coord: WeatherCoord;
  visibility: string;
  rain?: {
    [type: string]: number;
  };
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
   * @param latitude
   * @param longitude
   */
  getWeather(latitude: number, longitude: number): Observable<Weather> {
    const url = '/weather?units=metric&lat=' + latitude + `&lon=${longitude}&appid=${environment.api.key}`;
    return this.http.get<Weather>(environment.api.baseUrl + url);
  }
}
