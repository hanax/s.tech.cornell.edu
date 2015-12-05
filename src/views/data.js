var marked = require('marked');

var publications = [
  {
    title: 'paper title',
    image: 'http://lorempixel.com/g/400/400/cats/1/',
    link: '#'
  },
  {
    title: 'paper title',
    image: 'http://lorempixel.com/g/400/400/cats/2/',
    link: '#'
  },
];

var projects = [
  {
    title: 'project title',
    image: 'http://lorempixel.com/g/400/400/cats/3/',
    desc: 'desc',
    link: '#'
  },
  {
    title: 'project title',
    image: 'http://lorempixel.com/g/400/400/cats/3/',
    desc: 'desc',
    link: '#'
  },
  {
    title: 'project title',
    image: 'http://lorempixel.com/g/400/400/cats/3/',
    desc: 'desc',
    link: '#'
  },
].map(function(p) {
  p.desc = marked(p.desc);
  return p;
});

var people = [
  {
    name: 'Xiao Ma',
    link: '#',
    image: 'http://lorempixel.com/g/400/400/cats/4/',
    contact: 'hi@gmail.com'
  },
  {
    name: 'Xiao Ma',
    link: '#',
    image: 'http://lorempixel.com/g/400/400/cats/4/',
    contact: 'hi@gmail.com'
  },
];

var news = [
  {
    title: 'new title',
    link: '#',
  },
  {
    title: 'new title',
    link: '#',
  },
  {
    title: 'new title',
    link: '#',
  },
];

module.exports = {
  publications: publications,
  projects: projects,
  people: people,
  news: news,
};
