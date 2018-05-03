import { Component, OnInit } from '@angular/core';
import {Joke} from 'app/models/joke';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {
  jokes: Joke[];
  constructor() {
    this.jokes = [
      new Joke('What did the cheese say when it looked in the mirror?', 'Hello Me (Halloumi)')
    ];
  }

  ngOnInit() {
  }

  addJoke(joke: Joke) {
    this.jokes.unshift(joke);
  }

}
