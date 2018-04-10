import { DropdowncomponentPage } from './app.po';

describe('dropdowncomponent App', () => {
  let page: DropdowncomponentPage;

  beforeEach(() => {
    page = new DropdowncomponentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
