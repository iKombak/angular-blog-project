import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: false,
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent implements OnInit {

  @Input()
  Id:string=""
  @Input()
  photoCover:string = ""

  @Input()
  cardTitle:string = ""

  constructor(){}
  ngOnInit(): void {
  }

}
