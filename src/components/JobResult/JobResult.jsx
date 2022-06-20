import { useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './JobResult.module.scss';
import JobList from './JobList';
import JobHeader from './JobDetail/JobHeader';
import JobOverview from './JobDetail/JobOverview';
import JobContent from './JobDetail/JobContent';
import CompanyOverview from './CompanyOverview';
import { useStore } from '~/components/JobResult/store/useStore';
import * as actions from '~/components/JobResult/state/actions';

const cx = classNames.bind(styles);

const job = {
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
  reasonToJoin: ['13th Month Salary', 'Annual Bonus up to 30% of Annual Salary', 'Premium Health Insurance Package'],
  description: [
    'Develop new features and do maintenance for web',
    'Work as full stack developer with NodeJS and frontend framework (Angular/React/Vue)',
    "Analyzing, designing, and programming applications according to the company's orientation.",
    'Support the entire web lifecycle (concept, design, testing, release, support).',
    'Troubleshooting and debugging to optimize performance.',
    'Research and try recommended new products.',
  ],
  requirements: [
    {
      subTitle: 'Skills',
      content: [
        '3+ years of experience in web development (NodeJS + Angular/React/Vue)',
        'Good knowledge of HTML, CSS, JAVASCRIPT',
        'Good knowledge of Mobile web app',
        'Extensive experience with database such as (Postgres, MySQL, Mongo, etc.)',
        'Experience with cross-browser development and testing practices.',
        'Good knowledge of software development architecture',
        'Good knowledge of clean code',
        'Good knowledge of UI/UX',
        'Good knowledge of Git and workflow control',
        'Experience with Firebase is a plus',
        'Deep understanding of API and REST services, as well as integration to mobile, web',
        'Experience with Amazon Web Services (AWS), Google Cloud Platform (GCP)',
      ],
    },
    {
      subTitle: 'General',
      content: [
        'Proactive attitude for learning and applying new technologies.',
        'Strong desire to build a high-quality product, passion in creating good products',
        'Analytical skills and good problem-solving attitude',
        'Ability to perform in a team environment',
      ],
    },
  ],
  benefit: [
    '14+ annual leaves with flexible leave schedules',
    'Lunch and uniform allowance',
    '100% full salary-based insurance (Social; Health and Unemployment)',
    'Comprehensive annual check-up',
    'Yearly salary review',
    'Work from Home opportunities supported',
    'New, modern laptops, monitors equipped for new staffs',
    'Young, professional but family-alike working environment',
    'Open and honest culture where people are valued, treated fairly, trusted and empowered.',
  ],
};

// will replace by calling api
const jobListHardCode = [
  job,
  { ...job, id: 2 },
  { ...job, id: 3 },
  { ...job, id: 4 },
  { ...job, id: 5 },
  { ...job, id: 6 },
  { ...job, id: 7 },
  { ...job, id: 8 },
  { ...job, id: 9 },
  { ...job, id: 10 },
  { ...job, id: 11 },
  { ...job, id: 12 },
  { ...job, id: 13 },
  { ...job, id: 14 },
  { ...job, id: 15 },
  { ...job, id: 16 },
  { ...job, id: 17 },
];

function JobResult() {
  const [dispatch] = useStore();

  useEffect(() => {
    dispatch(actions.setJobList(jobListHardCode));
    dispatch(actions.setJobSelected(jobListHardCode[0]));
  }, []);

  return (
    <div className={cx('wrapper')}>
      <JobList />

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
