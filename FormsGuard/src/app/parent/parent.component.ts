import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  sale: boolean = JSON.parse(localStorage.getItem("sale")!)
  sucree: boolean = JSON.parse(localStorage.getItem("sucree")!)

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
  }

  changeHandler(event: Event, name: String): void {
    if (name == "sale") localStorage.setItem("sale", JSON.stringify(event))
    else if (name == "sucree") localStorage.setItem("sucree", JSON.stringify(event))
    console.log("sucree",);

  }

}
