import {HeroesComponent} from './heroes.component';
import {of} from 'rxjs/observable/of';

describe('HeroesComponent', () => {

  let component: HeroesComponent;
  let HEROES;
  let mockHeroeService;

  beforeEach(() =>{
    HEROES = [
      {id: 1, name: 'SpiderDude', strength: 8},
      {id: 2, name: 'Wonderful Woman', strength: 24},
      {id: 3, name: 'SuperDude', strength: 55}
    ];

    mockHeroeService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);

    component = new HeroesComponent(mockHeroeService);
  })

  describe('Delete', () => {

    it('should remove indicated hero from the heroes list', () => {

      mockHeroeService.deleteHero.and.returnValue(of(true));
      component.heroes = HEROES;

      component.delete(HEROES[0]);

      expect(component.heroes.length).toBe(2);
    })

    it('should call deleteHero', () => {

      mockHeroeService.deleteHero.and.returnValue(of(true));
      component.heroes = HEROES;

      component.delete(HEROES[0]);

      expect(mockHeroeService.deleteHero).toHaveBeenCalledWith(HEROES[0]);
    })
  })
})
