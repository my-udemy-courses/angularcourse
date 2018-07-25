import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styles: []
})
export class ReactiveComponent implements OnInit {
  myForm: FormGroup

  constructor() { }

  onSubmit(){
    console.log(this.myForm);
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [
        Validators.required,
        Validators.pattern("^((([!#$%&'*+\-/=?^_`{|}~\w])|([!#$%&'*+\-/=?^_`{|}~\w][!#$%&'*+\-/=?^_`{|}~\.\w]{0,}[!#$%&'*+\-/=?^_`{|}~\w]))[@]\w+([-.]\w+)*\.\w+([-.]\w+)*)$")
      ]),
      'password': new FormControl(null, Validators.required)
    });
  }

}
