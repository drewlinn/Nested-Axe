import { NestedAxePage } from './app.po';

describe('nested-axe App', () => {
  let page: NestedAxePage;

  beforeEach(() => {
    page = new NestedAxePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
