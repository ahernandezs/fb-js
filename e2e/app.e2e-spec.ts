import { FbJsPage } from './app.po';

describe('fb-js App', () => {
  let page: FbJsPage;

  beforeEach(() => {
    page = new FbJsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
