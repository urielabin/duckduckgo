import { expect } from 'chai';
import HomePage from '../pages/home.page';
import HomeSettingsComponent from '../pages/components/home-settings-sidepanel.component';
import OtherSettingsPage from '../pages/other-settings.page';

describe('DuckDuckGo Settings', () => {
    beforeEach(() => {
        HomePage.open();
    });

    it('should verify Settings header on side panel', () => {
        HomePage.clickHamburgerIcon();
        expect(HomeSettingsComponent.settingsHeader.waitForDisplayed()).to.be
            .true;
    });

    it('should verify Infinite scrollig switch color change', () => {
        let initialColor;
        let finalColor;

        HomePage.clickHamburgerIcon();
        HomeSettingsComponent.clickOtherSettingsItem();
        initialColor = OtherSettingsPage.getInfiniteScrollingSwitchColor();
        OtherSettingsPage.clickInfiniteScrollingSwitch();
        finalColor = OtherSettingsPage.getInfiniteScrollingSwitchColor();

        expect(initialColor).to.not.be.equal(finalColor);
    });
});
