class recipe {
  name;
  cols;
  thumbnail;
  steps = [];

  constructor(imageURL, title, cols) {
    this.thumbnail = imageURL;
    this.name = title;
    this.cols = cols;
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}


export const recipes = [
  { title: 'crunchwrap', image: 'https://i.redd.it/5mv1cejd4f861.jpg', cols: getRandomInt(1, 3) },
  { title: 'beef jjapaguri', image: 'https://i.redd.it/zjaupgf8nf861.jpg', cols: getRandomInt(1, 3) },
  { title: 'stuffed vine leaves', image: 'https://i.redd.it/tc1xdfhf0j861.jpg', cols: getRandomInt(1, 3) },
  { title: 'sushi', image: 'https://i.redd.it/e2sbj21whk861.jpg', cols: getRandomInt(1, 3) },
  { title: 'pizza', image: 'https://i.redd.it/2d1pmlrhpc861.jpg', cols: getRandomInt(1, 3) },
  { title: 'donuts', image: 'https://i.redd.it/yn6921c7hi861.jpg', cols: getRandomInt(1, 3) },
  { title: 'dinner rolls', image: 'https://i.redd.it/fd1nsjb8jk861.jpg', cols: getRandomInt(1, 3) },
  { title: 'blueberry cheesecake', image: 'https://i.redd.it/cec75cijqk861.jpg', cols: getRandomInt(1, 3) },
  { title: 'tamales', image: 'https://i.redd.it/9mmjv6wujk861.jpg', cols: getRandomInt(1, 3) },
  { title: 'creampuffs', image: 'https://i.imgur.com/JvtXJ4V.jpg', cols: getRandomInt(1, 3) },
  { title: 'chicken marbella', image: 'https://i.redd.it/uuzr9ippnk861.jpg', cols: getRandomInt(1, 3) },
  { title: 'croquembouche', image: 'https://i.redd.it/t9967t5dzj861.jpg', cols: getRandomInt(1, 3) },
].map(({ title, image, cols }) => new recipe(image, title, cols));
