import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styles: [`
    input.ng-touched.ng-invalid {
      border: 2px solid red;
    }
  `]
})
export class TemplateDrivenComponent implements OnInit {
  user = {
    name: "Arthur",
    email: "test@test.com",
    password: "geheim",
    gender: 'männlich'
  };

  genders = [
    'männlich',
    'weiblich',
    'transe'
  ];

  constructor() { }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }

  ngOnInit() {
  }

}
