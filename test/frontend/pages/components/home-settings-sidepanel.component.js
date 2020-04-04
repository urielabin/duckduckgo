class HomeSettingsComponent {
    get closeBtn() {
        return $('i.nav-menu__close');
    }

    get settingsHeader() {
        return $('//span[.="Settings"]');
    }

    get otherSettingsItem() {
        return $$('ul.nav-menu--theme li.nav-menu__item a')[1];
    }

    clickCloseBtn() {
        this.closeBtn.waitForEnabled();
        this.closeBtn.click();
    }

    clickOtherSettingsItem() {
        this.otherSettingsItem.waitForEnabled();
        this.otherSettingsItem.click();
    }
}

export default new HomeSettingsComponent();
