import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-contant',
  templateUrl: './main-contant.component.html',
  styleUrls: ['./main-contant.component.css']
})
export class MainContantComponent implements OnInit {

  constructor() { }
  @Input() mainInputJson: any;


  onChange(This) {

alert(This.getSelecteditem())
  }

  changeEventInRadioButton($event) {
    console.log($event);
}
  cssclass(cnt) {
  
    var returnValue='pink'
    if (cnt == 50) {
      return returnValue='yellow';
    } else if (cnt == 500) {
      return returnValue='red';
    } else if (cnt == 850) {
      return returnValue='green';
    } else {
      return returnValue;
    }
  }

  ngOnInit() {
  }

}
