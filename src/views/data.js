var marked = require('marked');

var publications = [
  {
    title: 'paper title',
    image: 'http://lorempixel.com/400/400/cat/1/',
    link: '#'
  },
  {
    title: 'paper title',
    image: 'http://lorempixel.com/400/400/cat/2/',
    link: '#'
  },
];

var projects = [
  {
    title: 'project title',
    image: 'http://lorempixel.com/400/400/cat/3/',
    desc: 'desc',
    link: '#'
  },
  {
    title: 'project title',
    image: 'http://lorempixel.com/400/400/cat/3/',
    desc: 'desc',
    link: '#'
  },
  {
    title: 'project title',
    image: 'http://lorempixel.com/400/400/cat/3/',
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
    url: '#',
    image: 'http://lorempixel.com/400/400/cat/4/',
    contact: 'hi@gmail.com'
  },
  {
    name: 'Xiao Ma',
    url: '#',
    image: 'http://lorempixel.com/400/400/cat/4/',
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
