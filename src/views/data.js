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
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis facere, dolorem sit sunt laborum tenetur. Inventore enim, eum, facere ea recusandae nisi. Non beatae maxime commodi doloribus, ex consequuntur rerum architecto? Officia alias ad, consequuntur iure omnis, aliquam praesentium, impedit cupiditate at quidem, ea veritatis suscipit facere! Eveniet ratione tenetur odio deserunt. At necessitatibus ipsa, similique cumque impedit, minus ab quos nesciunt aspernatur facere porro, eius voluptatibus cupiditate sequi nihil fugit fugiat. Culpa illum ratione cumque nulla voluptatem id cupiditate iure maiores nihil, maxime harum autem commodi voluptate recusandae eos dolorum ipsam ipsa accusantium at impedit, quasi repellendus perspiciatis. Aut consequatur, odio, totam cumque harum a nisi aspernatur corporis iusto fugit dolorum, esse tempora repudiandae ad quos. Repellat deleniti a modi, temporibus delectus blanditiis ad mollitia. Veniam fugit accusantium id commodi ea modi saepe tenetur earum laudantium nulla officiis voluptatibus consequatur architecto veritatis in expedita voluptas tempore assumenda, facere. Similique optio debitis aliquam eaque, odit voluptatibus nulla repudiandae soluta iste praesentium quasi expedita fugit in maiores, voluptatem. Excepturi assumenda harum suscipit voluptatum dolor. Libero dolore totam molestias in maxime, dolorum consectetur ut nesciunt odio, incidunt officiis illum esse doloremque placeat explicabo numquam quos quia. Non quas aut pariatur adipisci quibusdam.',
    link: '#'
  },
  {
    title: 'CommonBeat',
    image: 'http://lorempixel.com/g/400/400/cats/3/',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim alias vero laborum sit voluptas architecto quaerat ducimus non error, at voluptates, dolor possimus magnam eos suscipit ipsum, doloribus quisquam ea officia itaque deserunt fugit perferendis nulla accusamus! Veniam laborum, veritatis ullam recusandae illo, numquam neque fugiat qui id adipisci consectetur, itaque at dolore error delectus voluptate ex quam ipsam fuga aliquam iusto! Quisquam voluptatibus cum sint ullam debitis ipsam, impedit animi ratione sunt provident consectetur, voluptates aliquam non suscipit deleniti tempore libero blanditiis beatae, incidunt ad itaque hic officiis quam totam maxime! Quaerat quidem consectetur, itaque architecto vitae repellat doloribus, quasi nulla ullam. Quis minima dolor libero quos delectus iusto, veniam cum sit unde, architecto, natus debitis reiciendis labore. Debitis velit culpa voluptas, tenetur dolor, quam nihil ullam in quia laudantium modi molestiae eaque nulla libero est consequuntur maxime cupiditate optio explicabo doloribus. Facere, ducimus labore inventore, cum aliquam eveniet fugit iusto ab sapiente blanditiis facilis, dolores mollitia magni adipisci commodi reprehenderit omnis beatae corrupti sequi ut. Aliquam alias cumque, nemo recusandae porro ipsum aspernatur nesciunt cum voluptatem deserunt! Nemo nobis voluptas, consequuntur maiores aspernatur velit ex maxime at, ea dolores deleniti, et distinctio voluptates dignissimos officia similique numquam, voluptatum amet omnis. Asperiores quis repudiandae quia dolore numquam veniam culpa atque explicabo commodi unde laudantium omnis incidunt, dignissimos ab perferendis voluptates quidem nobis tenetur, temporibus tempore sint quibusdam! Blanditiis eaque maxime quis modi repellendus eos labore, quas asperiores velit dicta nostrum voluptate veritatis est molestiae, aspernatur eius, libero placeat adipisci illum quaerat alias laboriosam. Accusamus impedit ullam, quis quas eveniet mollitia, obcaecati rem, id repellendus sint quidem voluptas. In molestias maiores dolor, delectus fugit nihil facere minima velit sit molestiae qui beatae rem voluptate, reiciendis culpa, ducimus autem incidunt. Animi odit minima rem asperiores alias at itaque magni facere eaque.',
    link: '#'
  },
  {
    title: 'CommonBeat',
    image: 'http://lorempixel.com/g/400/400/cats/3/',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea totam quaerat voluptas expedita. At nihil ea quas. Expedita exercitationem tempora blanditiis velit. Quos in et at qui dolor optio voluptate quidem, modi tempore molestiae, quaerat consequatur earum architecto ab. Cupiditate magni accusamus officiis libero eligendi quae culpa! Expedita sapiente, quis possimus exercitationem quasi blanditiis, eaque hic praesentium omnis aspernatur accusamus magni molestias labore nobis, suscipit iste? Iusto autem, incidunt ex consequuntur commodi consequatur aspernatur, ducimus odit maiores similique fuga magnam assumenda velit ab quos qui eum vel quod repudiandae enim ut amet? Fugit laboriosam consequuntur alias quis quisquam accusantium nulla!',
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
    image: '../assets/img/profile_pic_xiao.jpg',
    email: 'xiao@jacobs.cornell.edu',
    twitter: 'infoxiao'
  },
  {
    name: 'Nir Grinberg',
    title: 'Post-doc',
    link: '#',
    image: '../assets/img/profile_pic_nir.jpg',
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
    image: '../assets/img/profile_pic_emily.jpg',
    email: 'emily@jacobs.cornell.edu',
    twitter: ''
  },
  {
    name: 'Ross McLachlan',
    title: 'Post-doc',
    link: '#',
    image: '../assets/img/profile_pic_ross.jpg',
    email: 'rdm257@cornell.edu',
    twitter: 'rossdmcLachlan'
  },
  {
    name: 'Minsu Park',
    title: 'PhD Student',
    link: '#',
    image: '../assets/img/profile_pic_minsu.png',
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
