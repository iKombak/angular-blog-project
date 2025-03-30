import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: false,
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
