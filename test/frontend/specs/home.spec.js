import { expect } from 'chai';
import HomePage from '../pages/home.page';

describe('DuckDuckGo Navigation', () => {
    beforeEach(() => {
        HomePage.open();
    });

    it('should verify DuckDuckGo slogan', () => {
        expect(HomePage.slogan.waitForDisplayed()).to.be.true;
    });
});
