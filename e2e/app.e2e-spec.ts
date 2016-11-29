import { Ng2gmailPage } from './app.po';

describe('ng2gmail App', function() {
  let page: Ng2gmailPage;

  beforeEach(() => {
    page = new Ng2gmailPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
