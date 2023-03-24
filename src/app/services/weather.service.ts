import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  url = 'https://api.openweathermap.org/data/2.5/weather?q=';
  key = 'a158b7b58e32dd76c08ca468b2be2e23';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    const URL =
      this.url + city + '&appid=' + this.key + '&units=imperial&lang=es';
    return this.http.get(URL);
  }
}
