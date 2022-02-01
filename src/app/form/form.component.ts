import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup( {
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      address: new FormGroup({
        country: new FormControl('ua'),
        city: new FormControl('', Validators.required)
      }),
      skills: new FormArray([])
    });
  }

  submit() {
    console.log(this.form.value);
    this.form.reset();
  }

  setCapital() {
    const capitals = {
      ru: "Москва",
      ua: "Киев",
      by: "Минск"
    }
    const cityKey = this.form.get('address').get('country').value
    const city = capitals[cityKey]
    this.form.patchValue({address: {city: city}});
  }

  addSkill() {
    const item = new FormControl('', Validators.required);
    (this.form.get('skills') as FormArray).push(item);
  }

}
