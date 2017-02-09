import { TestHTTPPage } from './app.po';

describe('test-http App', function() {
  let page: TestHTTPPage;

  beforeEach(() => {
    page = new TestHTTPPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
