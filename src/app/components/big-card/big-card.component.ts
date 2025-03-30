import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: false,
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit {

  @Input()
  Id:string="0"
  @Input()
  photoCover:string =""
  @Input()
  cardTitle:string= ""
  @Input()
  cardDescription:string =""

  constructor(){}

  ngOnInit(): void {
  }


}
