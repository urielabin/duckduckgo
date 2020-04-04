import Page from './page';

class SearchResults extends Page {
    get resultsItem() {
        return $$('a.result__a');
    }

    open() {
        super.open();
    }

    validateResults(text) {
        let textValue = '';
        let isFound = false;

        this.resultsItem.forEach(function (result) {
            textValue = result.getText();
            if (textValue === text) {
                isFound = true;
            }
        });
        return isFound;
    }
}

export default new SearchResults();
