import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  cadena: String = "";
  cadenaColor: String = "";

  btnPulsado(btn:HTMLButtonElement) {
    this.cadena = btn.innerText;
    this.cadenaColor = btn.id;
  }

  constructor() { }

  ngOnInit(): void {

  }
}
