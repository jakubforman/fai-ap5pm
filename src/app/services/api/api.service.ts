import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Weather} from '../../models/weather.model';

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
