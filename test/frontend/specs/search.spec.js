import { expect } from 'chai';
import HomePage from '../pages/home.page';
import SearchResults from '../pages/search-results.page';
import data from '../utils/test-data.json';

describe('DuckDuckGo Search', () => {
    beforeEach(() => {
        HomePage.open();
    });

    it('should search for specific text', () => {
        HomePage.fillSearch(`${data.search.text}`);
        HomePage.clickSearch();

        expect(SearchResults.validateResults(`${data.search.text_to_compare}`))
            .to.be.true;
    });
});
