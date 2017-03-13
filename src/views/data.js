var marked = require('marked');

var publications = [
  { 
  mobileInfo: 'Max Grusky, Jeiran Jahani, Josh Schwartz, Dan Valente, Yoav Artzi, and Mor Naaman. Modeling Sub-Document Attention Using Viewport Time. In Proceedings, ACM International Conference on Human Factors in Computing Systems. (CHI 2017), May 2017, Denver, USA',
    title: 'Modeling Sub-Document Attention Using Viewport Time',
    author: 'Max Grusky, Jeiran Jahani, Josh Schwartz, Dan Valente, Yoav Artzi, and Mor Naaman',
    conference: 'CHI 2017',
    type: 'Note',
    image: '/assets/img/publication/viewport-time-chi2017.png',
    links: [['PDF', '/assets/papers/viewport-time-chi2017.pdf']],
    abstract: 'Website measures of engagement captured from millions of users, such as in-page scrolling and viewport position, can provide deeper understanding of attention than possible with simpler measures, such as dwell time. Using data from 1.2M news reading sessions, we examine and evaluate three increasingly sophisticated models of sub-document attention computed from viewport time, the time a page component is visible on the user display. Our approach supports refined large-scale measurement of user engagement at a level previously available only from lab-based eye-tracking studies.'
  },
 { 
  mobileInfo: 'Emily Sun, Ross McLachlan, Mor Naaman. MoveMeant: Anonymously Building Community Through Shared Location Histories. In Proceedings, ACM International Conference on Human Factors in Computing Systems. (CHI 2017), May 2017, Denver, USA',
    title: 'MoveMeant: Anonymously Building Community Through Shared Location Histories',
    author: 'Emily Sun*, Ross McLachlan*, Mor Naaman (*authors contributed equally)',
    conference: 'CHI 2017',
    type: 'Note',
    image: '/assets/img/publication/movemeant.png',
    links: [['PDF', '/assets/papers/movemeant-note-chi2017.pdf']],
    abstract: 'We describe the design and implementation of MoveMeant, a system aimed to increase local community awareness through shared location traces. We report findings from interviews with residents in the Bronx, New York City who participated in a deployment of MoveMeant over a 6-week period.'
  },
 { 
  mobileInfo: 'Xiao Ma, Nazanin Andalibi, Louise Barkhuus, Mor Naaman. “People Are Either Too Fake or Too Real”: Opportunities and Challenges in Tie-Based Anonymity. In Proceedings, ACM International Conference on Human Factors in Computing Systems. (CHI 2017), May 2017, Denver, USA',
    title: '“People Are Either Too Fake or Too Real”: Opportunities and Challenges in Tie-Based Anonymity',
    author: 'Xiao Ma, Nazanin Andalibi, Louise Barkhuus, Mor Naaman',
    conference: 'CHI 2017',
    type: 'Paper',
    image: '/assets/img/publication/secret-qual.png',
    links: [['PDF', '/assets/papers/secret-qual.pdf']],
    abstract: 'We interviewed users of two anonymous social applications, Secret and Mimi, both of which allowed people to share information anonymously with friends. Our findings show that although users feel more comfortable sharing information on these “tie-based” anonymous applications, they are still concerned about being identified, and at the same time, engage in sometimes elaborate attempts to uncover the identities of others.'
  },
 { 
  mobileInfo: 'Xiao Ma, Jeff Hancock, Kenneth Lim Mingjie, Mor Naaman. Self-Disclosure and Perceived Trustworthiness of Airbnb Host Profiles. In Proceedings, ACM International Conference on Computer-Supported Cooperative Work. (CSCW 2017), February 2017, Portland, USA',
    title: 'Self-Disclosure and Perceived Trustworthiness of Airbnb Host Profiles',
    author: 'Xiao Ma, Jeff Hancock, Kenneth Lim Mingjie, Mor Naaman',
    conference: 'CSCW 2017',
    isAward: 'Best Paper Honorable Mention',
    type: 'Paper',
    image: '/assets/img/publication/airbnb.png',
    links: [['Dataset', 'https://github.com/sTechLab/AirbnbHosts', 'arrow-down'], 
            ['PDF', '/assets/papers/ma2017airbnb.pdf']],
    abstract: 'We conducted the first large-scale mixed-method analysis of Airbnb host profiles, by categorizing the types of information hosts share in their profiles, and assessing how trustworthy their profiles are perceived to be. We found that hosts do not always follow the prompts by Airbnb website, but instead disclose information that reduces the uncertainty of anticipated future interaction. The language of hospitality, i.e., making direct promises to take care of guests, was found to be the most effective in establishing perceived trustworthiness.'
  },
 { 
 	mobileInfo: 'Emily Sun, Ross McLachlan, Mor Naaman. TAMIES: A Study and Model of Adoption in P2P Resource Sharing and Indirect Exchange Systems. In Proceedings, ACM International Conference on Computer-Supported Cooperative Work. (CSCW 2017), February 2017, Portland, USA',
    title: 'TAMIES: A Study and Model of Adoption in P2P Resource Sharing and Indirect Exchange Systems',
    author: 'Emily Sun*, Ross McLachlan*, Mor Naaman (*authors contributed equally)',
    conference: 'CSCW 2017',
    type: 'Paper',
    image: '/assets/img/publication/P2PTAM_CR.jpg',
    links: [['PDF', '/assets/papers/tamies.pdf']],
    abstract: 'Peer-to-peer indirect exchange services, such as Peerby and NeighborGoods, do not seem to have been as widely adopted as direct exchange systems, such as Uber and AirBnb. Building upon the results of interviews with 37 residents of New York City, a survey with 195 respondents, previous technology acceptance models, critical mass theory, and prior research on peer economies, we propose a technology acceptance model for indirect exchange systems that includes generalized trust and ease of coordination.'
  },
 {  
 	mobileInfo: 'Xiao Ma, Emily Sun, Mor Naaman. What Happens in happn: The Warranting Power of Location History in Online Dating. In Proceedings, ACM International Conference on Computer-Supported Cooperative Work. (CSCW 2017), February 2017, Portland, USA',
    title: 'What Happens in happn: The Warranting Power of Location History in Online Dating',
    author: 'Xiao Ma, Emily Sun, Mor Naaman',
    conference: 'CSCW 2017',
    type: 'Paper',
    image: '/assets/img/publication/happn_website.jpg',
    links: [['PDF', '/assets/papers/making-sense-location_CR.pdf']],
    abstract: 'We interviewed users of a novel mobile dating application, happn, which shows users the number of times they crossed path with potential matches. We show that users assigned significant meaning to the minimal cues available from location history information. At the same time, users have concerns about security and recognition by known others as a result of sharing personal location history.'
  },

  {
    mobileInfo: 'Minsu Park, Mor Naaman, Jonah Berger. A Data-driven Study of View Duration on YouTube. In Proceedings, ACM International Conference on Web Logs and Social Media. (ICWSM 2016), May 2016, Cologne, Germany',
    title: 'A Data-driven Study of View Duration on YouTube',
    author: 'Minsu Park, Mor Naaman, Jonah Berger',
    conference: 'ICWSM 2016',
    type: 'Paper',
    image: '/assets/img/publication/publication-youtube.jpg',
    links: [['Dataset', 'https://github.com/sTechLab/YouTubeDurationData', 'arrow-down'], 
            ['PDF', '/assets/papers/ParkICWSM2016_YT.pdf']],
    abstract: 'Using two distinct YouTube datasets, we examine whether and how indicators of collective preferences and reactions are associated with view duration of videos.'
  },
  {
    mobileInfo: 'Xiao Ma, Jeff Hancock, Mor Naaman. Anonymity, Intimacy and Self-Disclosure in Social Media. In Proceedings, ACM Conference on Human Factors in Computing Systems. (CHI 2016), May 2015, San Jose, USA',
    title: 'Anonymity, Intimacy and Self-Disclosure in Social Media',
    author: 'Xiao Ma, Jeff Hancock, Mor Naaman',
    conference: 'CHI 2016',
    type: 'Paper',
    image: '/assets/img/publication/publication-Anonymity.jpg',
    video: '/assets/img/publication/publication-Anonymity.mp4',
    links: [['Dataset', 'https://github.com/sTechLab/SelfDisclosureItems', 'arrow-down'], 
            ['PDF', '/assets/papers/anonymity-intimacy-disclosure.pdf']],
    abstract: 'We conducted an experiment to study the relationship between content intimacy and self-disclosure in social media, and how anonymity and audience type (social ties vs. people nearby) moderate that relationship.'
  },
  {
    mobileInfo: 'Nir Grinberg, P. Alex Dow, Lada A. Adamic, and Mor Naaman. Changes in Engagement Before and After Posting to Facebook. In Proceedings, ACM Conference on Human Factors in Computing Systems. (CHI 2016), May 2015, San Jose, USA',
    title: 'Changes in Engagement Before and After Posting to Facebook',
    author: 'Nir Grinberg, P. Alex Dow, Lada A. Adamic, and Mor Naaman',
    conference: 'CHI 2016',
    isAward: 'Best Paper Honorable Mention',
    type: 'Paper',
    image: '/assets/img/publication/publication-08.png',
    links: [['PDF', 'http://www.nirg.net/papers/contribution2016grinberg.pdf']],
    abstract: 'The study identified a unique pattern of engagement that accompanies posting on Facebook. Using observational data analysis we show that after posting content, people visit the site more often, are more attentive to content from friends, and even interact more with friends content.'
  },
  {
    mobileInfo: 'Raz Schwarz, Mor Naaman, Rannie Teodoro. Editorial Algorithms: Using Social Media to Discover and Report Local News. In Proceedings, ACM International Conference on Web Logs and Social Media. (ICWSM 2015), May 2015, Cambridge, England',
    title: 'Editorial Algorithms: Using Social Media to Discover and Report Local News',
    author: 'Raz Schwarz, Mor Naaman, Rannie Teodoro',
    conference: 'ICWSM 2015',
    type: 'Paper',
    image: '/assets/img/publication/publication-01.png',
    links: [['PDF', 'https://people.jacobs.cornell.edu/mor/publications/thegoods/Schwartz_ICWSM2015_CityBeat.pdf']],
    abstract: 'We discuss CityBeat, a large-screen visualization that builds on machine learning techniques to expose hyper-local events in New York City from social media data. We deployed it with some national and local media and describe the gap between the journalistic needs and what our algorithm could provide.'
  },
  {
    mobileInfo: 'Minsu Park, Ingmar Weber, Mor Naaman, Sarah Vieweg. Understanding Musical Diversity via Online Social Media. In Proceedings, ACM International Conference on Web Logs and Social Media. (ICWSM 2015), May 2015, Cambridge, England',
    title: 'Understanding Musical Diversity via Online Social Media',
    author: 'Minsu Park, Ingmar Weber, Mor Naaman, Sarah Vieweg',
    conference: 'ICWSM 2015',
    type: 'Paper',
    image: '/assets/img/publication/publication-02.png',
    links: [['PDF', 'https://people.jacobs.cornell.edu/mor/publications/thegoods/Park_ICWSM2015_MusicalDiversity.pdf']],
    abstract: 'Using data from users of Last.fm and Twitter, we design and evaluate a novel measure for computing diversity of musical tastes, and investigate its relationships with socioeconomic status and personal traits such as openness and degree of interest in music.'
  },
  {
    mobileInfo: 'David Flatow, Mor Naaman, Ke Eddie Xie, Yana Volkovich, Yaron Kanza. On the Accuracy of Hyper-local Geotagging of Social Media Content. In Proceedings, the ACM International Conference on Web Search and Data Mining (WSDM 2015). March 2015, Shanghai, China.',
    title: 'On the Accuracy of Hyper-local Geotagging of Social Media Content',
    author: 'David Flatow, Mor Naaman, Ke Eddie Xie, Yana Volkovich, Yaron Kanza',
    conference: 'WSDM 2015',
    type: 'Paper',
    image: '/assets/img/publication/publication-03.png',
    links: [['PDF', 'https://people.jacobs.cornell.edu/mor/publications/thegoods/flatow_wsdm2015_geocoding.pdf']],
    abstract: 'Can we use geotagged social media to identify phrases that correspond to hyper-local geographic features? Does the geographic spread of such phrases differ between services or device types? (the answer to both is yes).'
  },
  {
    mobileInfo: 'Funda Kivran-Swaine, Jeremy Ting, Jed Richards Brubaker, Rannie Teodoro, Mor Naaman.Understanding Loneliness in Social Awareness Streams: Expressions and Responses. Eighth International AAAI Conference on Weblogs and Social Media. (ICWSM 2014)',
    title: 'Understanding Loneliness in Social Awareness Streams: Expressions and Responses',
    author: 'Funda Kivran-Swaine, Jeremy Ting, Jed Richards Brubaker, Rannie Teodoro, Mor Naaman',
    conference: 'ICWSM 2014',
    type: 'Paper',
    image: '/assets/img/publication/publication-04.png',
    links: [['PDF', 'http://www.aaai.org/ocs/index.php/ICWSM/ICWSM14/paper/view/8038/8126']],
    abstract: 'Content analysis of tweets expressing loneliness exposes some key patterns in how people talk about loneliness on Twitter, as well as when such posts are likely to receive a response from friends and followers. '
  },
  {
    mobileInfo: 'Rannie Teodoro, Pinar Ozturk, Mor Naaman, Winter Mason, and Janne Lindqvist. The Motivations and Experiences of the On-demand Mobile Workforce. In Proceedings, ACM Conference on Computer Supported Cooperative Work. (CSCW 2014), February 2014',
    title: 'The Motivations and Experiences of the On-demand Mobile Workforce',
    author: 'Rannie Teodoro, Pinar Ozturk, Mor Naaman, Winter Mason, and Janne Lindqvist',
    conference: 'CSCW 2014',
    type: 'Paper',
    image: '/assets/img/publication/publication-05.png',
    links: [['PDF', 'https://people.jacobs.cornell.edu/mor/publications/thegoods/Teodoro_CSCW2014_mobile_workforce.pdf']],
    abstract: 'We performed semi-structured interviews with workers of on-demand mobile workforce applications that match users with physical world tasks to expose their motivations, practices, and experiences. '
  },
  {
    mobileInfo: 'Jessa Lingel, Mor Naaman and danah boyd. City, Self, Network: Transnational Migrants and Online Identity Work. In Proceedings, ACM Conference on Computer Supported Cooperative Work. (CSCW 2014), February 2014',
    title: 'City, Self, Network: Transnational Migrants and Online Identity Work',
    author: 'Jessa Lingel, Mor Naaman and danah boyd',
    conference: 'CSCW 2014',
    type: 'Paper',
    image: '/assets/img/publication/publication-06.jpg',
    links: [['PDF', 'https://people.jacobs.cornell.edu/mor/publications/thegoods/Lingel_CSCW2014_migrants.pdf']],
    abstract: 'What are the challenges new immigrants face in online self-presentation and use of Facebook? We did a qualitative study to find out. '
  },
  {
    mobileInfo: 'Grinberg, Nir, Mor Naaman, Blake Shaw, and Gilad Lotan. "Extracting Diurnal Patterns of Real World Activity from Social Media." In ICWSM. 2013.',
    title: 'Extracting Diurnal Patterns of Real World Activity from Social Media',
    author: 'Grinberg, Nir, Mor Naaman, Blake Shaw, and Gilad Lotan',
    conference: 'ICWSM 2013',
    type: 'Paper',
    image: '/assets/img/publication/publication-07.png',
    links: [['PDF', 'http://www.nirg.net/papers/grinberg-icwsm2013-extracting.pdf']],
    abstract: 'We developed methods to identify how people talk about real-world activities on social media. By examining activities such as nightlife, food or shopping we peek at the fundamental rhythm of human behavior at a city level and observe how it was disrupted during Hurricane Sandy.'
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
    twitter: 'informor'
  },
/* 
  {
    name: 'Trevor Pinch',
    title: 'Visiting Professor',
    link: 'http://sts.cornell.edu/people/tjp2.cfm',
    image: '/assets/img/people/trevor.gif',
    email: 'tjp2@cornell.edu',
  },
/*  {
    name: 'Ross McLachlan',
    title: 'Post-doc',
    link: 'http://www.rossmclachlan.co.uk/',
    image: '/assets/img/people/profile_pic_ross.jpg',
    email: 'rdm257@cornell.edu',
    twitter: 'rossdmcLachlan'
  },
  */
  {
    name: 'Nir Grinberg',
    title: 'PhD Student',
    link: 'http://www.nirg.net/',
    image: '/assets/img/people/profile_pic_nir.jpg',
    email: 'nir@cs.cornell.edu',
    twitter: 'grinbergnir'
  },
  {
    name: 'Max Grusky',
    title: 'PhD Student',
    link: 'https://www.cs.cornell.edu/~grusky/',
    image: '/assets/img/people/max.jpg',
    email: 'grusky@cs.cornell.edu',
  },  
    {
    name: 'Matthew Law',
    title: 'PhD Student',
    link:  'http://mattlaw.io',
    image: '/assets/img/people/matt.jpg',
    email:  'mvl24@cornell.edu'
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
    name: 'Emily Sun',
    title: 'PhD Student',
    link: 'http://emilywsun.com',
    image: '/assets/img/people/profile_pic_emily.jpg',
    email: 'emily@jacobs.cornell.edu',
    twitter: 'emilywsun'
  }
];

var news = [
  { 
    title: 'Received Google Research Award to support our on attention to online media',
    date: '2/2017'
  },
	{ 
		title: '“Self-Disclosure and Perceived Trustworthiness of Airbnb Host Profiles” Honorable Mention for Best Paper at CSCW 2017',
		date: '1/2017'
	},
	{ 
		title: 'Three papers from the lab were accepted to CHI. Check out the PDFs below!',
		date: '12/2016'
	},
/*	{ 
		title: 'Five papers by lab authors accepted to CSCW 2017 -- PDF now available.',
		date: '9/2016'
	},
/*	{
		title:' “Changes in Engagement Before and After Posting to Facebook”  Honorable Mention for Best Paper at CHI 2016',
		date:'5/2016'
	},
  	{
/*    	title: 'Paper studying view duration of YouTube videos to appear in ICWSM; the paper and dataset are both available below',
    	date: '4/2016'
  	},
/*  {
    title: 'Mor gave a keynote at [SNOW](http://www.snow-workshop.org) in Montreal on April 12.',
    date: '4/2016'
  },
  {
    title: 'Mor is an invited speaker at the [9th International Conference on Web Search and Data Mining](http://www.wsdm-conference.org/2016/invited-speakers.html#pe-naaman) (WSDM 2016) in San Francisco on February 25.',
    date: '2/2016'
  },*/
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
