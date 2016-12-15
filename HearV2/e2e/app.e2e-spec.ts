import { HearPage } from './app.po';

describe('hear App', function() {
  let page: HearPage;

  beforeEach(() => {
    page = new HearPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
