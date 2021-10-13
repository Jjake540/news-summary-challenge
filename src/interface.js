'use strict';

document.addEventListener("DOMContentLoaded", () => {
  getTopicStories('politics').then((data) => {
    const stories = data.response.results
    let storyHtml = displayStories(stories)
    let homePage = document.querySelector('#homePageView')
    homePage.appendChild(storyHtml)
  
    })

})




// curl "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=politics"

// http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body

// https://content.guardianapis.com/search?q=politics