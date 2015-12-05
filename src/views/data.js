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
    title: 'CommonBeat',
    image: 'http://lorempixel.com/g/400/400/cats/3/',
    desc: 'desc',
    link: '#'
  },
  {
    title: 'CommonBeat',
    image: 'http://lorempixel.com/g/400/400/cats/3/',
    desc: 'desc',
    link: '#'
  },
  {
    title: 'CommonBeat',
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
    name: 'Lousie Barkhus',
    title: 'Visiting Professor',
    link: '#',
    image: 'http://lorempixel.com/g/400/400/cats/4/',
    email: 'barkhuus@dsv.su.se',
    twitter: ''
  },
  {
    name: 'Xiao Ma',
    title: 'PhD Student',
    link: '#',
    image: 'http://lorempixel.com/g/400/400/cats/4/',
    email: 'xiao@jacobs.cornell.edu',
    twitter: 'infoxiao'
  },
  {
    name: 'Nir Grinberg',
    title: 'Post-doc',
    link: '#',
    image: 'http://lorempixel.com/g/400/400/cats/4/',
    email: 'rdm257@cornell.edu',
    twitter: 'rossdmchlachlan'
  },
  {
    name: 'Mor Naaman',
    title: 'Associate Professor',
    link: '#',
    image: 'http://lorempixel.com/g/400/400/cats/4/',
    email: 'mor@jacobs.cornell.edu',
    twitter: 'infomor'
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
