var marked = require('marked');

var publications = [
  {
    mobileInfo: 'Xiao Ma, Jeff Hancock, Mor Naaman. Anonymity, Intimacy and Self-Disclosure in Social Media. In Proceedings, ACM Conference on Human Factors in Computing Systems. (CHI 2016), May 2015, San Jose, USA',
    title: 'Anonymity, Intimacy and Self-Disclosure in Social Media',
    author: 'Xiao Ma, Jeff Hancock, Mor Naaman',
    conference: 'CHI 2016',
    image: '/assets/img/publication/publication-Anonymity.png',
    video: '/assets/img/publication/publication-Anonymity.mp4',
    links: [['Dataset', 'https://github.com/sTechLab/SelfDisclosureItems'], 
            ['PDF', 'http://www.nirg.net/papers/contribution2016grinberg.pdf']],
    abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    mobileInfo: 'Nir Grinberg, P. Alex Dow, Lada A. Adamic, and Mor Naaman. Changes in Engagement Before and After Posting to Facebook. In Proceedings, ACM Conference on Human Factors in Computing Systems. (CHI 2016), May 2015, San Jose, USA',
    title: 'Changes in Engagement Before and After Posting to Facebook',
    author: 'Nir Grinberg, P. Alex Dow, Lada A. Adamic, and Mor Naaman',
    conference: 'CHI 2016',
    image: '/assets/img/publication/publication-08.png',
    links: [['PDF', 'http://www.nirg.net/papers/contribution2016grinberg.pdf']],
    abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    mobileInfo: 'Raz Schwarz, Mor Naaman, Rannie Teodoro. Editorial Algorithms: Using Social Media to Discover and Report Local News. In Proceedings, ACM International Conference on Web Logs and Social Media. (ICWSM 2015), May 2015, Cambridge, England',
    title: 'Editorial Algorithms: Using Social Media to Discover and Report Local News',
    author: 'Raz Schwarz, Mor Naaman, Rannie Teodoro',
    conference: 'ICWSM 2015',
    image: '/assets/img/publication/publication-01.png',
    links: [['PDF', 'https://people.jacobs.cornell.edu/mor/publications/thegoods/Schwartz_ICWSM2015_CityBeat.pdf']],
    abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    mobileInfo: 'Minsu Park, Ingmar Weber, Mor Naaman, Sarah Vieweg. Understanding Musical Diversity via Online Social Media. In Proceedings, ACM International Conference on Web Logs and Social Media. (ICWSM 2015), May 2015, Cambridge, England',
    title: 'Understanding Musical Diversity via Online Social Media',
    author: 'Minsu Park, Ingmar Weber, Mor Naaman, Sarah Vieweg',
    conference: 'ICWSM 2015',
    image: '/assets/img/publication/publication-02.png',
    links: [['PDF', 'https://people.jacobs.cornell.edu/mor/publications/thegoods/Park_ICWSM2015_MusicalDiversity.pdf']],
    abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    mobileInfo: 'David Flatow, Mor Naaman, Ke Eddie Xie, Yana Volkovich, Yaron Kanza. On the Accuracy of Hyper-local Geotagging of Social Media Content. In Proceedings, the ACM International Conference on Web Search and Data Mining (WSDM 2015). March 2015, Shanghai, China.',
    title: 'On the Accuracy of Hyper-local Geotagging of Social Media Content',
    author: 'David Flatow, Mor Naaman, Ke Eddie Xie, Yana Volkovich, Yaron Kanza',
    conference: 'WSDM 2015',
    image: '/assets/img/publication/publication-03.png',
    links: [['PDF', 'https://people.jacobs.cornell.edu/mor/publications/thegoods/flatow_wsdm2015_geocoding.pdf']],
    abstract: 'Social media users share billions of items per year, only a small fraction of which is geotagged. We present a datadriven approach for identifying non-geotagged content items that can be associated with a hyper-local geographic area by modeling the location distributions of n-grams that appear in the text. We explore the trade-off between accuracy and coverage of this method. Further, we explore differences across content received from multiple platforms and devices, and show, for example, that content shared via different sources and applications produces significantly different geographic distributions, and that it is preferred to model and predict location for items according to their source. Our findings show the potential and the bounds of a data-driven approach to assigning location data to short social media texts, and offer implications for all applications that use data-driven approaches to locate content.'
  },
  {
    mobileInfo: 'Funda Kivran-Swaine, Jeremy Ting, Jed Richards Brubaker, Rannie Teodoro, Mor Naaman.Understanding Loneliness in Social Awareness Streams: Expressions and Responses. Eighth International AAAI Conference on Weblogs and Social Media. (ICWSM 2014)',
    title: 'Understanding Loneliness in Social Awareness Streams: Expressions and Responses',
    author: 'Funda Kivran-Swaine, Jeremy Ting, Jed Richards Brubaker, Rannie Teodoro, Mor Naaman',
    conference: 'ICWSM 2014',
    image: '/assets/img/publication/publication-04.png',
    links: [['PDF', 'http://www.aaai.org/ocs/index.php/ICWSM/ICWSM14/paper/view/8038/8126']],
    abstract: 'We studied the experience of loneliness as communicated by thousands of people on Twitter. Using a data set of public Twitter posts containing explicit expressions of loneliness, we qualitatively developed a categorization scheme for these expressions, showing how the context of loneliness expressed on Twitter relates to existing theories about loneliness. A quantitative analysis of the data exposed categories and patterns in communication practices around loneliness. For example, users expressing more severe, enduring loneliness are more likely to be female, and less likely to include requests for social interaction in their tweets. Further, we studied the responses to expressions of loneliness in Twitter’s social settings. Deriving from the same dataset, we examined factors that correlate with the existence and type of response, showing, for example, that men were more likely to receive responses to lonely tweets, and expressions of enduring loneliness are critically less likely to receive responses.'
  },
  {
    mobileInfo: 'Rannie Teodoro, Pinar Ozturk, Mor Naaman, Winter Mason, and Janne Lindqvist. The Motivations and Experiences of the On-demand Mobile Workforce. In Proceedings, ACM Conference on Computer Supported Cooperative Work. (CSCW 2014), February 2014',
    title: 'The Motivations and Experiences of the On-demand Mobile Workforce',
    author: 'Rannie Teodoro, Pinar Ozturk, Mor Naaman, Winter Mason, and Janne Lindqvist',
    conference: 'CSCW 2014',
    image: '/assets/img/publication/publication-05.png',
    links: [['PDF', 'https://people.jacobs.cornell.edu/mor/publications/thegoods/Teodoro_CSCW2014_mobile_workforce.pdf']],
    abstract: 'On-demand mobile workforce applications match physical world tasks and willing workers. These systems offer to help conserve resources, streamline courses of action, and increase market efficiency for micro- and mid-level tasks, from verifying the existence of a pothole to walking a neighbor’s dog. This study reports on the motivations and experiences of individuals who regularly complete physical world tasks posted in on-demand mobile workforce marketplaces. Data collection included semi-structured interviews with members (workers) of two different services. The analysis revealed the main drivers for participating in an on-demand mobile workforce, including desires for monetary compensation and control over schedules and task selection. We also reveal main reasons for task selection, which involve situational factors, convenient physical locations, and task requester profile information. Finally, we discuss the key characteristics of the most worthwhile tasks and offer implications for novel crowdsourcing systems for physical world tasks.'
  },
  {
    mobileInfo: 'Jessa Lingel, Mor Naaman and danah boyd. City, Self, Network: Transnational Migrants and Online Identity Work. In Proceedings, ACM Conference on Computer Supported Cooperative Work. (CSCW 2014), February 2014',
    title: 'City, Self, Network: Transnational Migrants and Online Identity Work',
    author: 'Jessa Lingel, Mor Naaman and danah boyd',
    conference: 'CSCW 2014',
    image: '/assets/img/publication/publication-06.jpg',
    links: [['PDF', 'https://people.jacobs.cornell.edu/mor/publications/thegoods/Lingel_CSCW2014_migrants.pdf']],
    abstract: 'We use qualitative interviews with 26 transnational migrants in New York City to analyze socio-technical practices related to online identity work. We focus specifically on the use of Facebook, where benefits included keeping in touch with friends and family abroad and documenting everyday urban life. At the same time, many participants also reported experiences of fatigue, socio-cultural tensions and concerns about maintaining a sense of personal privacy. These experiences highlight how transnational practices complicate context collapse, where the geographic dispersal of participants’ personal networks renders visible conflicts of “flattened” online networks. Our findings also suggest a kind of technology-enabled codeswitching, where transnational migrants leverage social media to perform identities that alternate between communities, nationalities and geographies. This analysis informs HCI research on transnationalism and technological practices, and helps expose the complexities of online identity work in terms of shifting social and spatial contexts.'
  },
  {
    mobileInfo: 'Grinberg, Nir, Mor Naaman, Blake Shaw, and Gilad Lotan. "Extracting Diurnal Patterns of Real World Activity from Social Media." In ICWSM. 2013.',
    title: 'Extracting Diurnal Patterns of Real World Activity from Social Media',
    author: 'Grinberg, Nir, Mor Naaman, Blake Shaw, and Gilad Lotan',
    conference: 'ICWSM 2013',
    image: '/assets/img/publication/publication-07.png',
    links: [['PDF', 'http://www.nirg.net/papers/grinberg-icwsm2013-extracting.pdf']],
    abstract: 'In this study, we develop methods to identify verbal expressions in social media streams that refer to real-world activities. Using aggregate daily patterns of Foursquare checkins, our methods extract similar patterns from Twitter, extending the amount of available content while preserving high relevance. We devise and test several methods to extract such content, using timeseries and semantic similarity. Evaluating on key activity categories available from Foursquare (coffee, food, shopping and nightlife), we show that our extraction methods are able to capture equivalent patterns in Twitter. By examining rudimentary categories of activity such as nightlife, food or shopping we peek at the fundamental rhythm of human behavior and observe when it is disrupted. We use data compiled during the abnormal conditions in New York City throughout Hurricane Sandy to examine the outcome of our methods.'
  },
];

var projects = [
  {
    title: 'Locally-Connected Experiences',
    image: '/assets/img/project/project-1.jpg',
    desc: 'As part of the AOL [Connected Experiences Laboratory](http://connectedexperiences.org/), we look at how data from mobile devices, sensors, as well as new cryptographic techniques and protocols can enable a socio-technical infrastructure to provide awareness, trust and meaningful connections between physically co-located individuals, including buildings, offices, and public spaces. Such infrastructure will empower people to make better connections and communication in their local communities, with long term impact on participation and democracy.',
    link: '#'
  },
  {
    title: 'Attention to Online Media',
    image: '/assets/img/project/project-2.jpg',
    desc: 'The goal of this project is to advance our understanding of the psychological mechanisms behind people\'s attention, as reflected through their interactions with digital content. In particular, we focus on the context of actions that people take online without any experimental intervention and examine how context affects behavior. We draw on theories from a wide range of fields to address questions that pertain to individual\'s attention to content, expectations for attention from others and the value in getting that attention. To that end, we harness machine learning methods as well as language and statistical modeling to analyze signals of human attention as they occurs naturally outside of lab settings.',
    link: '#'
  },
].map(function(p) {
  p.desc = marked(p.desc);
  return p;
});

var people = [
  {
    name: 'Mor Naaman',
    title: 'Associate Professor',
    link: 'https://people.jacobs.cornell.edu/mor/',
    image: '/assets/img/people/profile_pic_mor.jpg',
    email: 'mor@jacobs.cornell.edu',
    twitter: 'infomor'
  },
  {
    name: 'Ross McLachlan',
    title: 'Post-doc',
    link: 'http://www.rossmclachlan.co.uk/',
    image: '/assets/img/people/profile_pic_ross.jpg',
    email: 'rdm257@cornell.edu',
    twitter: 'rossdmcLachlan'
  },
  {
    name: 'Nir Grinberg',
    title: 'PhD Student',
    link: 'http://www.nirg.net/',
    image: '/assets/img/people/profile_pic_nir.jpg',
    email: 'nir@cs.cornell.edu',
    twitter: 'grinbergnir'
  },  
  {
    name: 'Xiao Ma',
    title: 'PhD Student',
    link: 'http://maxiao.info/',
    image: '/assets/img/people/profile_pic_xiao.jpg',
    email: 'xiao@jacobs.cornell.edu',
    twitter: 'infoxiao'
  },
  {
    name: 'Minsu Park',
    title: 'PhD Student',
    link: 'https://sites.google.com/site/mansumansu/',
    image: '/assets/img/people/profile_pic_minsu.png',
    email: 'minsu@jacobs.cornell.edu',
    twitter: 'mansumansu'
  },
  {
    name: 'Emily Sun',
    title: 'PhD Student',
    link: 'http://emilywsun.com',
    image: '/assets/img/people/profile_pic_emily.jpg',
    email: 'emily@jacobs.cornell.edu',
    twitter: 'emilywsun'
  },
  {
    name: 'Louise Barkhuus',
    title: 'Visiting Professor',
    link: 'http://www.barkhu.us/',
    image: '/assets/img/people/profile_pic_louise.jpg',
    email: 'barkhuus@cornell.edu',
    twitter: 'barkhuus'
  },
  {
    name: 'Matthew Salganik',
    title: 'Visiting Professor',
    link: 'http://www.princeton.edu/~mjs3/',
    image: '/assets/img/people/profile_pic_matthew.jpg',
    email: 'mjs99@cornell.edu',
    twitter: 'msalganik'
  }
];

var news = [
  {
    title: 'We had 4 papers accepted to CHI 2016 in San Jose! Congratulations to Xiao, Nir, Louise, and Mor!',
    date: '12/2015'
  },
  {
    title: 'Our lab is hiring PhD students! Check out the [Cornell Information Science site](http://infosci.cornell.edu/academics/phd/how-apply) on how to apply to work with us next year.',
    date: '12/2015'
  },
  {
    title: 'Mor recently gave two different workshop keynotes at [IEEE International Conference on Data Mining](http://icdm2015.stonybrook.edu/) (ICDM 2015) in Atlantic City on November 14-17.',
    date: '11/2015'
  },
].map(function(n) {
  n.title = marked(n.title);
  return n;
});

module.exports = {
  publications: publications,
  projects: projects,
  people: people,
  news: news,
};
