"use strict";

let newsApp = new NewsApp({
  headline: 'Todays headline',
  textBody: 'Text body',
  image: 'image url'
});

it('gets the headline text', () => {
  expect(newsApp.getHeadline()).toEqual('Todays headline');
})