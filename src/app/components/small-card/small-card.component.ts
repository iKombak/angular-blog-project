import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: false,
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
