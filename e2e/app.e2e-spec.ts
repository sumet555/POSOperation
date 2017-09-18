import { POS.OperationPage } from './app.po';

describe('pos.operation App', () => {
  let page: POS.OperationPage;

  beforeEach(() => {
    page = new POS.OperationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
