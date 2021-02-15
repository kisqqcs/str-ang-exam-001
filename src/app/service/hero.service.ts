import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private list: Hero[] = [
    { id: 1,
      name: "Charles Xavier",
      superpower: "psychic powers",
      address:"Xavier Institute, 1407 Graymalkin Lane, New York. "
    },
    { id: 2,
      name: "Jean Grey",
      superpower: "psychic powers",
      address:"Xavier Institute, 1407 Graymalkin Lane, New York. "
    },
    { id: 3,
      name: "Scott Summers",
      superpower: "energy beams",
      address:"Xavier Institute, 1407 Graymalkin Lane, New York. "
    },
    { id: 4,
      name: "James Howlett",
      superpower: "adamantium claws, rapid healing",
      address:"Xavier Institute, 1407 Graymalkin Lane, New York. "
    },
    { id: 5,
      name: "Emma Frost",
      superpower: "psychic powers, diamond body",
      address:"Xavier Institute, 1407 Graymalkin Lane, New York. "
    },
  ]
  list$: BehaviorSubject<Hero[]> = new BehaviorSubject<Hero[]>([]);
  constructor() { }

  getAll(): void {
    this.list$.next(this.list);
  }
}
