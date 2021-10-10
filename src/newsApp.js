'use strict';

class NewsApp {
  constructor(input) {
    this.headline = input['headline'];
    this.textBody = input['textBody'];
    this.image = input['image']
  };

  getHeadline() {
    return this.headline
  }

  getTextBody() {
    return this.textBody
  }

  getImage() {
    return this.image
  }

}