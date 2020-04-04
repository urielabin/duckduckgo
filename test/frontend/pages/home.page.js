import Page from './page';

class HomePage extends Page {
    get duckDuckGoLogo() {
        return $('#logo_homepage_link');
    }

    get searchInput() {
        return $('#search_form_input_homepage');
    }

    get searchBtn() {
        return $('#search_button_homepage');
    }

    get slogan() {
        return $('div.tag-home__item');
    }

    get hamburgerIcon() {
        return $('a.header__button--menu');
    }

    open() {
        super.open();
    }

    fillSearch(text) {
        this.searchInput.waitForEnabled();
        this.searchInput.setValue(text);
    }

    clickSearch() {
        this.searchBtn.waitForEnabled();
        this.searchBtn.click();
    }

    clickHamburgerIcon() {
        this.hamburgerIcon.waitForEnabled();
        this.hamburgerIcon.click();
    }
}

export default new HomePage();
