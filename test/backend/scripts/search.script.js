const axios = require('axios');

axios
    .get(
        'https://api.duckduckgo.com/?q=simpsons+characters&format=json&pretty=1'
    )
    .then(function (response) {
        console.log(response.status);
        //console.log(response.data.RelatedTopics[0].Icon.URL);

        for (let x = 0; x < response.data.RelatedTopics.length; x++) {
            if (response.data.RelatedTopics[x].Icon.URL !== '') {
                console.log(
                    '=== RELATED TOPIC - ' +
                        response.data.RelatedTopics[x].Text.split(' ', 2) +
                        ' ==='
                );
                console.log(response.data.RelatedTopics[x].Text);
                console.log(response.data.RelatedTopics[x].Icon.URL);
                console.log(
                    '================================================='
                );
            }
        }
    })
    .catch(function (error) {
        console.log(error);
    });
