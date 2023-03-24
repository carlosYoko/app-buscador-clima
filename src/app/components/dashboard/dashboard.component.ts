import { Component } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  urlImage =
    'https://w7.pngwing.com/pngs/624/6/png-transparent-weather-forecasting-ios-7-weather-blue-text-weather-icon-thumbnail.png';

  city = '';
  descriptiion = '';
  temp = 0;
  humidity = 0;
  query = false;
  spinn = false;
  errorMsg = false;

  constructor(private _weatherService: WeatherService) {}

  getWeather() {
    this.spinn = true;
    this.errorMsg = false;

    this._weatherService.getWeather(this.city).subscribe(
      (data) => {
        this.query = true;
        this.city = data.name;
        this.descriptiion = data.weather[0].description;
        this.humidity = data.main.humidity;
        this.temp = +(((data.main.temp - 32) * 5) / 9).toFixed(2);
        this.spinn = false;
      },
      (error) => {
        this.spinn = false;
        this.errorMsg = true;
        setTimeout(() => {
          this.errorMsg = false;
          this.city = '';
        }, 5000);
      }
    );
  }

  clear() {
    this.query = false;
  }
}
