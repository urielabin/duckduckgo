import Page from './page';

class OtherSettingsPage extends Page {
    get infiniteScrollingSwith() {
        return $$('div.frm__field label.frm__switch__label')[2];
    }

    open() {
        super.open();
    }

    clickInfiniteScrollingSwitch() {
        this.infiniteScrollingSwith.waitForEnabled();
        this.infiniteScrollingSwith.click();
    }

    getInfiniteScrollingSwitchColor() {
        return this.infiniteScrollingSwith.getCSSProperty('background-color');
    }
}

export default new OtherSettingsPage();
