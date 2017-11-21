import { CookService } from './../../services/cook.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cook',
  templateUrl: './cook.component.html',
  styleUrls: ['./cook.component.css'],
  providers: [CookService]
})
export class CookComponent implements OnInit {
  title = 'Cook Details';
  cooks = [];


  constructor(private CookService: CookService) { }

  getCook() {
    this.cooks = this.CookService.getCooks();
    console.log(this.cooks);
    return this.cooks;
  }

  getOneCook(cookName): void {
    this.cooks = this.CookService.getCooks();
    console.log(cookName);
    return this.cooks.find(cookName);
  }
  ngOnInit() {
  }
}
