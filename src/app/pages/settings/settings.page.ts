import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Place, PlacesService} from '../../services/places/places.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  /**
   * Hold all available places
   */
  places: Place[] = [];

  /**
   * Reactive from group
   */
  form: FormGroup

  constructor(
    private modalCtrl: ModalController,
    private fb: FormBuilder,
    private placesService: PlacesService
  ) {
    // set places from service getter
    this.places = this.placesService.places;

    // create form hardcoded
    this.form = this.fb.group({
      ch1: [this.places[0].homepage, []],
      ch2: [this.places[1].homepage, []],
      ch3: [this.places[2].homepage, []],
      ch4: [this.places[3].homepage, []],
      ch5: [this.places[4].homepage, []],
      ch6: [this.places[5].homepage, []],
    });

    // on form control (value) change
    this.form.valueChanges.subscribe(data => {
      // set every hardcoded place to save active state
      this.placesService.setHome(0, data.ch1);
      this.placesService.setHome(1, data.ch2);
      this.placesService.setHome(2, data.ch3);
      this.placesService.setHome(3, data.ch4);
      this.placesService.setHome(4, data.ch5);
      this.placesService.setHome(5, data.ch6);
    });
  }

  ngOnInit() {
  }

  /**
   * Click event dismiss
   */
  async dismiss() {
    // dismiss modal
    await this.modalCtrl.dismiss();
  }
}
