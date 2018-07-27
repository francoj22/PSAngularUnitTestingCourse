import {StrengthPipe} from './strength.pipe';

describe('StrengthPipe', () =>  {

  let pipe: StrengthPipe;

  beforeEach(() => {
    this.pipe = new StrengthPipe();
  })

  it('should display weak if strength is 5', () => {
    expect(this.pipe.transform(5)).toEqual('5 (weak)');
  });

  it('should display strong if strength is 10', () => {
    expect(this.pipe.transform(10)).toEqual('10 (strong)');
  })

  it('should display unbelievable if strength is 25',() =>{
    expect(this.pipe.transform(25)).toEqual('25 (unbelievable)')
  })
})
