import { Injectable } from '@angular/core';

@Injectable()
export class CookService {


  cooks = [ {
    id: 1,
    name: 'Bobby',
    youtubechannel: 'http://www.youtube.com'
  },

  {
    id: 2,
    name: 'Shiva Tanwer',
    youtubechannel: 'http://www.youtube.com'
  },
  {
    id: 3,
    name: 'Sajni Tanwer',
    youtubechannel: 'http://www.youtube.com'
  },
  {
    id: 4,
    name: 'Nazneen Tanwer',
    youtubechannel: 'http://www.youtube.com'
  }
];

  getCooks() {
    return this.cooks;
  }

  constructor() { }

}
