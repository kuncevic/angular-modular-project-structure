import { AngularModularProjectStructurePage } from './app.po';

describe('angular-modular-project-structure App', () => {
  let page: AngularModularProjectStructurePage;

  beforeEach(() => {
    page = new AngularModularProjectStructurePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
