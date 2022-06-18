import classNames from 'classnames/bind';

import styles from './TopCompanies.module.scss';
import TopCompany from './TopCompany';
import config from '~/config';

const cx = classNames.bind(styles);

// will replace by calling api
const topCompanyList = [
  {
    companyName: 'Hanwha Financial Technology',
    slogan: 'Hire great people and give them freedom to be awesome.',
    logo: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNWpkRHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--03b3d677c23e7cca369bfe42c0698c7946968f44/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2RwUm1sRyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--d55b6722f71e82d147ad94b8445be27797820f9f/nal-vi-t-nam-nal-global-career-logo.png',
    profileLink: config.routes.companyProfile,
    type: 'Product',
    size: '1000+',
    workingDays: 'Monday - Friday',
    location: 'Ho Chi Minh',
    jobOpening: 6,
    id: 1,
  },
  {
    companyName: 'Hanwha Financial Technology',
    slogan: 'Hire great people and give them freedom to be awesome.',
    logo: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNWpkRHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--03b3d677c23e7cca369bfe42c0698c7946968f44/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2RwUm1sRyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--d55b6722f71e82d147ad94b8445be27797820f9f/nal-vi-t-nam-nal-global-career-logo.png',
    profileLink: config.routes.companyProfile,
    type: 'Product',
    size: '1000+',
    workingDays: 'Monday - Friday',
    location: 'Ho Chi Minh',
    jobOpening: 6,
    id: 2,
  },
  {
    companyName: 'Hanwha Financial Technology',
    slogan: 'Hire great people and give them freedom to be awesome.',
    logo: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNWpkRHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--03b3d677c23e7cca369bfe42c0698c7946968f44/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2RwUm1sRyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--d55b6722f71e82d147ad94b8445be27797820f9f/nal-vi-t-nam-nal-global-career-logo.png',
    profileLink: config.routes.companyProfile,
    type: 'Product',
    size: '1000+',
    workingDays: 'Monday - Friday',
    location: 'Ho Chi Minh',
    jobOpening: 6,
    id: 3,
  },
  {
    companyName: 'Hanwha Financial Technology',
    slogan: 'Hire great people and give them freedom to be awesome.',
    logo: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNWpkRHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--03b3d677c23e7cca369bfe42c0698c7946968f44/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2RwUm1sRyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--d55b6722f71e82d147ad94b8445be27797820f9f/nal-vi-t-nam-nal-global-career-logo.png',
    profileLink: config.routes.companyProfile,
    type: 'Product',
    size: '1000+',
    workingDays: 'Monday - Friday',
    location: 'Ho Chi Minh',
    jobOpening: 6,
    id: 4,
  },
  {
    companyName: 'Hanwha Financial Technology',
    slogan: 'Hire great people and give them freedom to be awesome.',
    logo: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNWpkRHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--03b3d677c23e7cca369bfe42c0698c7946968f44/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2RwUm1sRyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--d55b6722f71e82d147ad94b8445be27797820f9f/nal-vi-t-nam-nal-global-career-logo.png',
    profileLink: config.routes.companyProfile,
    type: 'Product',
    size: '1000+',
    workingDays: 'Monday - Friday',
    location: 'Ho Chi Minh',
    jobOpening: 6,
    id: 5,
  },
  {
    companyName: 'Hanwha Financial Technology',
    slogan: 'Hire great people and give them freedom to be awesome.',
    logo: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNWpkRHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--03b3d677c23e7cca369bfe42c0698c7946968f44/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2RwUm1sRyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--d55b6722f71e82d147ad94b8445be27797820f9f/nal-vi-t-nam-nal-global-career-logo.png',
    profileLink: config.routes.companyProfile,
    type: 'Product',
    size: '1000+',
    workingDays: 'Monday - Friday',
    location: 'Ho Chi Minh',
    jobOpening: 6,
    id: 6,
  },
  {
    companyName: 'Hanwha Financial Technology',
    slogan: 'Hire great people and give them freedom to be awesome.',
    logo: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNWpkRHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--03b3d677c23e7cca369bfe42c0698c7946968f44/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2RwUm1sRyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--d55b6722f71e82d147ad94b8445be27797820f9f/nal-vi-t-nam-nal-global-career-logo.png',
    profileLink: config.routes.companyProfile,
    type: 'Product',
    size: '1000+',
    workingDays: 'Monday - Friday',
    location: 'Ho Chi Minh',
    jobOpening: 6,
    id: 7,
  },
  {
    companyName: 'Hanwha Financial Technology',
    slogan: 'Hire great people and give them freedom to be awesome.',
    logo: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNWpkRHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--03b3d677c23e7cca369bfe42c0698c7946968f44/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2RwUm1sRyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--d55b6722f71e82d147ad94b8445be27797820f9f/nal-vi-t-nam-nal-global-career-logo.png',
    profileLink: config.routes.companyProfile,
    type: 'Product',
    size: '1000+',
    workingDays: 'Monday - Friday',
    location: 'Ho Chi Minh',
    jobOpening: 6,
    id: 8,
  },
];

function TopCompanies() {
  return (
    <div className={cx('wrapper')}>
      <h1 className={cx('title')}>Top Employers</h1>
      <div className={cx('content')}>
        {topCompanyList.map((company) => (
          <TopCompany key={company.id} data={company} />
        ))}
      </div>
    </div>
  );
}

export default TopCompanies;
