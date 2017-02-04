import { WcnexusPage } from './app.po';

describe('wcnexus App', function() {
  let page: WcnexusPage;

  beforeEach(() => {
    page = new WcnexusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
