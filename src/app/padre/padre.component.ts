import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  cadena: String = "";

  btnPulsado(btn:HTMLButtonElement) {
    this.cadena = btn.innerText;
  }

  constructor() { }

  ngOnInit(): void {

  }
}
