import classNames from 'classnames/bind';

import styles from './JobResult.module.scss';
import JobList from './JobList';
import JobHeader from './JobDetail/JobHeader';
import JobOverview from './JobDetail/JobOverview';
import JobContent from './JobDetail/JobContent';
import CompanyOverview from './CompanyOverview';

const cx = classNames.bind(styles);

// will replace by calling api
const jobList = [
  {
    id: '1',
    logo: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNWpkRHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--03b3d677c23e7cca369bfe42c0698c7946968f44/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2RwUm1sRyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--d55b6722f71e82d147ad94b8445be27797820f9f/nal-vi-t-nam-nal-global-career-logo.png',
    title: 'Front-end Dev (Angular/ReactJS/VueJS)',
    salary: '1,300 - 2,000 USD',
    skills: ['Angular', 'ReactJS', 'VueJS'],
    location: 'Ho Chi Minh',
    address: '19th Floor, 81-85 Ham Nghi Street, Nguyen Thai Binh Ward, District 1, Ho Chi Minh',
    mapLink: '#',
    postedTime: 600000000,
    type: 'On-site',
    hotJob: false,
    seen: false,
    highlightBenefits: [
      'Attractive Salary Up to $2,000',
      'Excellent Bonus & Compensation',
      'Fintech CRM Projects (Crypto, FX)',
    ],
  },
  {
    id: '2',
    logo: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNWpkRHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--03b3d677c23e7cca369bfe42c0698c7946968f44/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2RwUm1sRyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--d55b6722f71e82d147ad94b8445be27797820f9f/nal-vi-t-nam-nal-global-career-logo.png',
    title: 'Front-end Dev (Angular/ReactJS/VueJS)',
    salary: '1,300 - 2,000 USD',
    skills: ['Angular', 'ReactJS', 'VueJS'],
    location: 'Ha Noi',
    postedTime: 60000,
    hotJob: true,
    seen: true,
  },
  {
    id: '3',
    logo: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNWpkRHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--03b3d677c23e7cca369bfe42c0698c7946968f44/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2RwUm1sRyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--d55b6722f71e82d147ad94b8445be27797820f9f/nal-vi-t-nam-nal-global-career-logo.png',
    title: 'Front-end Dev (Angular/ReactJS/VueJS)',
    salary: '1,300 - 2,000 USD',
    skills: ['Angular', 'ReactJS', 'VueJS'],
    location: 'Ha Noi',
    postedTime: 30000,
    highlightBenefits: [
      'Attractive Salary Up to $2,000',
      'Excellent Bonus & Compensation',
      'Fintech CRM Projects (Crypto, FX)',
    ],
    hotJob: true,
    seen: true,
  },
  {
    id: '4',
    logo: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNWpkRHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--03b3d677c23e7cca369bfe42c0698c7946968f44/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2RwUm1sRyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--d55b6722f71e82d147ad94b8445be27797820f9f/nal-vi-t-nam-nal-global-career-logo.png',
    title: 'Front-end Dev (Angular/ReactJS/VueJS)',
    salary: '1,300 - 2,000 USD',
    skills: ['Angular', 'ReactJS', 'VueJS'],
    location: 'Ha Noi',
    postedTime: 600000000,
    seen: true,
  },
  {
    id: '5',
    logo: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNWpkRHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--03b3d677c23e7cca369bfe42c0698c7946968f44/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2RwUm1sRyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--d55b6722f71e82d147ad94b8445be27797820f9f/nal-vi-t-nam-nal-global-career-logo.png',
    title: 'Front-end Dev (Angular/ReactJS/VueJS)',
    salary: '1,300 - 2,000 USD',
    skills: ['Angular', 'ReactJS', 'VueJS'],
    location: 'Ha Noi',
    postedTime: 600000000,
    seen: true,
  },
  {
    id: '6',
    logo: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNWpkRHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--03b3d677c23e7cca369bfe42c0698c7946968f44/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2RwUm1sRyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--d55b6722f71e82d147ad94b8445be27797820f9f/nal-vi-t-nam-nal-global-career-logo.png',
    title: 'Front-end Dev (Angular/ReactJS/VueJS)',
    salary: '1,300 - 2,000 USD',
    skills: ['Angular', 'ReactJS', 'VueJS'],
    location: 'Ha Noi',
    postedTime: 600000000,
    seen: true,
    hotJob: true,
  },
  {
    id: '7',
    logo: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNWpkRHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--03b3d677c23e7cca369bfe42c0698c7946968f44/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2RwUm1sRyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--d55b6722f71e82d147ad94b8445be27797820f9f/nal-vi-t-nam-nal-global-career-logo.png',
    title: 'Front-end Dev (Angular/ReactJS/VueJS)',
    salary: '1,300 - 2,000 USD',
    skills: ['Angular', 'ReactJS', 'VueJS'],
    location: 'Ha Noi',
    seen: true,
    postedTime: 600000000,
    highlightBenefits: [
      'Attractive Salary Up to $2,000',
      'Excellent Bonus & Compensation',
      'Fintech CRM Projects (Crypto, FX)',
    ],
  },
  {
    id: '8',
    logo: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNWpkRHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--03b3d677c23e7cca369bfe42c0698c7946968f44/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2RwUm1sRyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--d55b6722f71e82d147ad94b8445be27797820f9f/nal-vi-t-nam-nal-global-career-logo.png',
    title: 'Front-end Dev (Angular/ReactJS/VueJS)',
    salary: '1,300 - 2,000 USD',
    skills: ['Angular', 'ReactJS', 'VueJS'],
    location: 'Ha Noi',
    seen: true,
    postedTime: 600000000,
  },
  {
    id: '9',
    logo: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNWpkRHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--03b3d677c23e7cca369bfe42c0698c7946968f44/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2RwUm1sRyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--d55b6722f71e82d147ad94b8445be27797820f9f/nal-vi-t-nam-nal-global-career-logo.png',
    title: 'Front-end Dev (Angular/ReactJS/VueJS)',
    salary: '1,300 - 2,000 USD',
    skills: ['Angular', 'ReactJS', 'VueJS'],
    location: 'Ha Noi',
    seen: true,
    postedTime: 600000000,
  },
  {
    id: '10',
    logo: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNWpkRHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--03b3d677c23e7cca369bfe42c0698c7946968f44/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2RwUm1sRyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--d55b6722f71e82d147ad94b8445be27797820f9f/nal-vi-t-nam-nal-global-career-logo.png',
    title: 'Front-end Dev (Angular/ReactJS/VueJS)',
    salary: '1,300 - 2,000 USD',
    skills: ['Angular', 'ReactJS', 'VueJS'],
    location: 'Ha Noi',
    seen: true,
    postedTime: 600000000,
  },
  {
    id: '11',
    logo: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNWpkRHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--03b3d677c23e7cca369bfe42c0698c7946968f44/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2RwUm1sRyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--d55b6722f71e82d147ad94b8445be27797820f9f/nal-vi-t-nam-nal-global-career-logo.png',
    title: 'Front-end Dev (Angular/ReactJS/VueJS)',
    salary: '1,300 - 2,000 USD',
    skills: ['Angular', 'ReactJS', 'VueJS'],
    location: 'Ha Noi',
    seen: true,
    postedTime: 600000000,
  },
  {
    id: '12',
    logo: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNWpkRHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--03b3d677c23e7cca369bfe42c0698c7946968f44/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2RwUm1sRyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--d55b6722f71e82d147ad94b8445be27797820f9f/nal-vi-t-nam-nal-global-career-logo.png',
    title: 'Front-end Dev (Angular/ReactJS/VueJS)',
    salary: '1,300 - 2,000 USD',
    skills: ['Angular', 'ReactJS', 'VueJS'],
    location: 'Ha Noi',
    seen: true,
    postedTime: 600000000,
  },
  {
    id: '13',
    logo: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNWpkRHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--03b3d677c23e7cca369bfe42c0698c7946968f44/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2RwUm1sRyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--d55b6722f71e82d147ad94b8445be27797820f9f/nal-vi-t-nam-nal-global-career-logo.png',
    title: 'Front-end Dev (Angular/ReactJS/VueJS)',
    salary: '1,300 - 2,000 USD',
    skills: ['Angular', 'ReactJS', 'VueJS'],
    location: 'Ha Noi',
    seen: true,
    postedTime: 600000000,
  },
  {
    id: '14',
    logo: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNWpkRHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--03b3d677c23e7cca369bfe42c0698c7946968f44/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2RwUm1sRyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--d55b6722f71e82d147ad94b8445be27797820f9f/nal-vi-t-nam-nal-global-career-logo.png',
    title: 'Front-end Dev (Angular/ReactJS/VueJS)',
    salary: '1,300 - 2,000 USD',
    skills: ['Angular', 'ReactJS', 'VueJS'],
    location: 'Ha Noi',
    seen: true,
    postedTime: 600000000,
  },
  {
    id: '15',
    logo: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNWpkRHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--03b3d677c23e7cca369bfe42c0698c7946968f44/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2RwUm1sRyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--d55b6722f71e82d147ad94b8445be27797820f9f/nal-vi-t-nam-nal-global-career-logo.png',
    title: 'Front-end Dev (Angular/ReactJS/VueJS)',
    salary: '1,300 - 2,000 USD',
    skills: ['Angular', 'ReactJS', 'VueJS'],
    location: 'Ha Noi',
    seen: true,
    postedTime: 600000000,
  },
];

function JobResult() {
  return (
    <div className={cx('wrapper')}>
      <JobList jobList={jobList} />

      <div className={cx('detail')}>
        <div className={cx('job')}>
          <JobHeader />
          <JobOverview />
          <JobContent />
        </div>
        <div className={cx('company')}>
          <CompanyOverview />
        </div>
      </div>
    </div>
  );
}

export default JobResult;
