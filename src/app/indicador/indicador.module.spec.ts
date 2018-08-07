import { IndicadorModule } from './indicador.module';

describe('IndicadorModule', () => {
  let indicadorModule: IndicadorModule;

  beforeEach(() => {
    indicadorModule = new IndicadorModule();
  });

  it('should create an instance', () => {
    expect(indicadorModule).toBeTruthy();
  });
});
