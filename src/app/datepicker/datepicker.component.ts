import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

  @ViewChild('myPicker') myPicker;
  contactName:  string  =  "";
  contactAddress:  string  =  "";
  contactSource:  string  =  "direct";
  contactGender:  string  =  "male";
  isDeleted  :  boolean  =  false;
  date  =  new  FormControl(new  Date());

  constructor() { }

  ngOnInit(): void {
  }
  
  open() {
    this.myPicker.open();
  }

}
