import config from '~/config';

// header
const CITIES = ['All Cities', 'Ho Chi Minh', 'Ha Noi', 'Da Nang', 'Others'];

const JOBS = [
  {
    title: 'Jobs by Skill',
    searchBy: 'skills',
    link: config.routes.jobsBySkill,
    data: [
      'Java',
      'PHP',
      'JavaScript',
      'HTML5',
      'Manager',
      'SQL',
      'Android',
      'iOS',
      'MySQL',
      'Tester',
      'English',
      'Ruby',
      'Python',
      'Mobile Apps',
      'Ruby on Rails',
      'QA QC',
      'Database',
      '.NET',
      'Business Analyst',
      'Linux',
      'Team Leader',
      'NodeJS',
      'System Engineer',
      'Designer',
      'UI-UX',
      'Project Manager',
      'OOP',
      'Oracle',
      'MVC',
      'ReactJS',
      'Embedded',
      'J2EE',
    ],
    viewAll: 'skill',
  },
  {
    title: 'Job by Title',
    searchBy: 'title',
    link: config.routes.jobsByTitle,
    data: [
      'Java Developer',
      'PHP Developer',
      'Javascript Developer',
      'ReactJS Developer',
      'HTML5 Developer',
      'SQL Developer',
      'Android Developer',
      'iOS Developer',
      'Ruby Developer',
      'Python Developer',
      'Ruby On Rails Developer',
      '.NET Developer',
      'NodeJS Developer',
      'Linux Developer',
      'OOP Developer',
      'Oracle Developer',
      'C++ Developer',
      'Wordpress Developer',
      'Designer',
      'Database Administrator',
      'Mobile Apps Developer',
      'Project Manager',
      'Product Owner',
      'Bridge Engineer',
    ],
    viewAll: 'title',
  },
  {
    title: 'Jobs by Company',
    searchBy: 'company',
    link: config.routes.jobsByCompany,
    data: [
      'MB Bank',
      'HDBank',
      'NFQ Asia',
      'MONEY FORWARD VIETNAM CO.,LTD',
      'KMS Technology',
      'Ngân Hàng Á Châu | ACB',
      'NAB Innovation Centre Vietnam',
      'Techcombank',
      'DEK Technologies',
      'GFT Technologies Vietnam',
      'PVcomBank',
      'Parcel Perform',
      'Zalo',
      'Simple Tech Investment',
      'ShopBack',
      'Saigon Technology',
    ],
    viewAll: 'company',
  },
  {
    title: 'Jobs by City',
    searchBy: 'location',
    data: CITIES,
  },
];

const IT_COMPANIES = [
  {
    title: 'Vietnam Best IT Companies',
    link: config.routes.bestCompanies,
    data: ['Best IT Companies 2022', 'Best IT Companies 2021', 'Best IT Companies 2020', 'Best IT Companies 2019'],
  },
  { title: 'Company Reviews', link: config.routes.reviewCompany },
];

// filtered jobs
const FILTER_TITLES = {
  level: 'Job Level',
  salary: 'Salary Range',
  companyType: 'Company Type',
};

const FILTERS = [
  {
    title: FILTER_TITLES.level,
    data: ['Fresher', 'Junior', 'Senior', 'Manager'],
  },
  {
    title: FILTER_TITLES.salary,
    data: [500, 1000, 2000, 2500],
    leftCharacter: '>=',
    rightCharacter: 'USD',
  },
  {
    title: FILTER_TITLES.companyType,
    data: ['Oursourcing', 'Product'],
  },
];

// export
export { CITIES, JOBS, IT_COMPANIES, FILTERS, FILTER_TITLES };
