"use strict";

const newsApp = new NewsApp({
  headline: 'Todays headline',
  textBody: 'Text body',
  image: 'image url'
});


it('gets the headline text', () => {
  expect(newsApp.getHeadline()).toEqual('Todays headline')
});

it('gets the text body', () => {
  expect(newsApp.getTextBody()).toEqual('Text body')
});

it('gets the image url', () => {
  expect(newsApp.getImage()).toEqual('image url')
});

