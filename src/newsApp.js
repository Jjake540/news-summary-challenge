'use strict';


const getTopicStories = (topic) => {
  const url = `http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=${topic}`
  
  return fetch(url)
    .then((response) => {
      return response.json();
    })  
}

const displayStories = (stories) => {
  let storyList = document.createElement('ul')
    for (let i = 0; i < stories.length; i++ ) {
     let storyItem = document.createElement('li')
      storyItem.innerText = stories[i].webTitle
        storyList.appendChild(storyItem)
    }
      return storyList

}









// curl "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=politics"

// http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body

// https://content.guardianapis.com/search?q=politics