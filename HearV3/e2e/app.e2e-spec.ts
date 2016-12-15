import { HearV3Page } from './app.po';

describe('hear-v3 App', function() {
  let page: HearV3Page;

  beforeEach(() => {
    page = new HearV3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
