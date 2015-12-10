var marked = require('marked');

var publications = [
  {
    title: 'paper title',
    image: 'http://lorempixel.com/g/200/150/cats/1/',
    link: '#'
  },
  {
    title: 'paper title',
    image: 'http://lorempixel.com/g/200/150/cats/2/',
    link: '#'
  },
  {
    title: 'paper title',
    image: 'http://lorempixel.com/g/200/150/cats/3/',
    link: '#'
  },
  {
    title: 'paper title',
    image: 'http://lorempixel.com/g/200/150/cats/4/',
    link: '#'
  },
];

var projects = [
  {
    title: 'CommonBeat',
    image: 'http://lorempixel.com/g/400/400/cats/3/',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis facere, dolorem sit sunt laborum tenetur.',
    link: '#'
  },
  {
    title: 'CommonBeat',
    image: 'http://lorempixel.com/g/400/400/cats/3/',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim alias vero laborum sit voluptas architecto quaerat ducimus non error, at voluptates, dolor.',
    link: '#'
  },
  {
    title: 'CommonBeat',
    image: 'http://lorempixel.com/g/400/400/cats/3/',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea totam quaerat voluptas expedita. At nihil ea quas. Expedita exercitationem tempora blanditiis velit. Quos in',
    link: '#'
  },
];

// .map(function(p) {
//   p.desc = marked(p.desc);
//   return p;
// });

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
    image: '/assets/img/profile_pic_xiao.jpg',
    email: 'xiao@jacobs.cornell.edu',
    twitter: 'infoxiao'
  },
  {
    name: 'Nir Grinberg',
    title: 'Post-doc',
    link: '#',
    image: '/assets/img/profile_pic_nir.jpg',
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
  {
    name: 'Emily Sun',
    title: 'PhD Student',
    link: '#',
    image: '/assets/img/profile_pic_emily.jpg',
    email: 'emily@jacobs.cornell.edu',
    twitter: ''
  },
  {
    name: 'Ross McLachlan',
    title: 'Post-doc',
    link: '#',
    image: '/assets/img/profile_pic_ross.jpg',
    email: 'rdm257@cornell.edu',
    twitter: 'rossdmcLachlan'
  },
  {
    name: 'Minsu Park',
    title: 'PhD Student',
    link: '#',
    image: '/assets/img/profile_pic_minsu.png',
    email: 'minsu@jacobs.cornell.edu',
    twitter: 'mansumansu'
  }
].sort((p1, p2) => {
  return p1.name.split(' ')[1] > p2.name.split(' ')[1]
});

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
