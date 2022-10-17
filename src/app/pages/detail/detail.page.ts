import {Component, OnInit} from '@angular/core';
import {PlacesService} from "../../services/places/places.service";
import {Weather} from "../../models/weather.model";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  weather: Weather;

  constructor(
    private placesService: PlacesService
  ) {
  }

  ngOnInit() {
    this.weather = this.placesService.detail;
  }

}
