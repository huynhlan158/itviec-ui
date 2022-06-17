import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Flag from 'react-world-flags';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faUserGroup } from '@fortawesome/free-solid-svg-icons';

import styles from './CompanyOverview.module.scss';
import CompanyImage from '~/components/CompanyImage';
import Button from '~/components/Button';
import config from '~/config';
import CharacteristicItem from '~/components/CharacteristicItem';
import { faCalendarDays, faClock, faFlag } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

// will replace by using context hook
const currentJobSelected = {
  companyName: 'Hanwha Financial Technology',
  jobTitle: 'Fullstack Dev (NodeJS, Angular/ReactJS)',
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

const currentCompanySelected = {
  companyName: 'Hanwha Financial Technology',
  slogan: 'Hire great people and give them freedom to be awesome.',
  logo: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNWpkRHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--03b3d677c23e7cca369bfe42c0698c7946968f44/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2RwUm1sRyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--d55b6722f71e82d147ad94b8445be27797820f9f/nal-vi-t-nam-nal-global-career-logo.png',
  type: 'Product',
  size: '1000+',
  workingDays: 'Monday - Friday',
  country: 'Germany',
  countryCode: 'DE',
  overtime: false,
};

function CompanyOverview({ children }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <CompanyImage to={config.routes.companyProfile} src={currentCompanySelected.logo} />

        <div className={cx('name')}>
          <h3 className={cx('title')}>{currentJobSelected.companyName}</h3>
          <span className={cx('sub-title')}>{currentCompanySelected.slogan}</span>
        </div>
      </div>

      <div className={cx('content')}>
        <div className={cx('characteristics')}>
          <CharacteristicItem icon={<FontAwesomeIcon icon={faGear} />}>
            {currentCompanySelected.type}
          </CharacteristicItem>
          <CharacteristicItem icon={<FontAwesomeIcon icon={faUserGroup} />}>
            {currentCompanySelected.size}
          </CharacteristicItem>
          <CharacteristicItem icon={<FontAwesomeIcon icon={faCalendarDays} />}>
            {currentCompanySelected.workingDays}
          </CharacteristicItem>
          <CharacteristicItem
            icon={<Flag code={currentCompanySelected.countryCode} fallback={<FontAwesomeIcon icon={faFlag} />} />}
          >
            {currentCompanySelected.country}
          </CharacteristicItem>
          {!currentCompanySelected.overtime && (
            <CharacteristicItem icon={<FontAwesomeIcon icon={faClock} />}>No OT</CharacteristicItem>
          )}
        </div>

        <div className={cx('view-profile')}>
          <Button to={config.routes.companyProfile} outline lg>
            View Company Profile
          </Button>
        </div>
      </div>
    </div>
  );
}

CompanyOverview.propTypes = {
  children: PropTypes.node,
};

export default CompanyOverview;
