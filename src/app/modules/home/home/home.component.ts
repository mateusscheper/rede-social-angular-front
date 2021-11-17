import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  host: {
    class: 'row'
  },
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
  }
}
