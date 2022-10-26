import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  btnPulsado(e:Event) {
    if (e.target) {
      
    }
  }

  constructor() { }

  ngOnInit(): void {

  }
}
