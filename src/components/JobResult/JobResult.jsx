import classNames from 'classnames/bind';

import styles from './JobResult.module.scss';
import Sidebar from './Sidebar';
import JobHeader from './JobDetail/JobHeader';
import JobOverview from './JobDetail/JobOverview';

const cx = classNames.bind(styles);

function JobResult() {
  const jobList = [
    {
      id: '1',
      logo: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNWpkRHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--03b3d677c23e7cca369bfe42c0698c7946968f44/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2RwUm1sRyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--d55b6722f71e82d147ad94b8445be27797820f9f/nal-vi-t-nam-nal-global-career-logo.png',
      title: 'Front-end Dev (Angular/ReactJS/VueJS)',
      salary: '1,300 - 2,000 USD',
      skills: ['Angular', 'ReactJS', 'VueJS'],
      location: 'Ha Noi',
      postedDate: '6d',
      newTag: true,
    },
    {
      id: '2',
      logo: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNWpkRHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--03b3d677c23e7cca369bfe42c0698c7946968f44/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2RwUm1sRyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--d55b6722f71e82d147ad94b8445be27797820f9f/nal-vi-t-nam-nal-global-career-logo.png',
      title: 'Front-end Dev (Angular/ReactJS/VueJS)',
      salary: '1,300 - 2,000 USD',
      skills: ['Angular', 'ReactJS', 'VueJS'],
      location: 'Ha Noi',
      postedDate: '6d',
      hotTag: true,
      active: true,
    },
    {
      id: '3',
      logo: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNWpkRHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--03b3d677c23e7cca369bfe42c0698c7946968f44/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2RwUm1sRyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--d55b6722f71e82d147ad94b8445be27797820f9f/nal-vi-t-nam-nal-global-career-logo.png',
      title: 'Front-end Dev (Angular/ReactJS/VueJS)',
      salary: '1,300 - 2,000 USD',
      skills: ['Angular', 'ReactJS', 'VueJS'],
      location: 'Ha Noi',
      postedDate: '6d',
      special: true,
      hotTag: true,
    },
    {
      id: '4',
      logo: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNWpkRHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--03b3d677c23e7cca369bfe42c0698c7946968f44/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2RwUm1sRyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--d55b6722f71e82d147ad94b8445be27797820f9f/nal-vi-t-nam-nal-global-career-logo.png',
      title: 'Front-end Dev (Angular/ReactJS/VueJS)',
      salary: '1,300 - 2,000 USD',
      skills: ['Angular', 'ReactJS', 'VueJS'],
      location: 'Ha Noi',
      postedDate: '6d',
    },
    {
      id: '5',
      logo: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNWpkRHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--03b3d677c23e7cca369bfe42c0698c7946968f44/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2RwUm1sRyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--d55b6722f71e82d147ad94b8445be27797820f9f/nal-vi-t-nam-nal-global-career-logo.png',
      title: 'Front-end Dev (Angular/ReactJS/VueJS)',
      salary: '1,300 - 2,000 USD',
      skills: ['Angular', 'ReactJS', 'VueJS'],
      location: 'Ha Noi',
      postedDate: '6d',
      newTag: true,
    },
    {
      id: '6',
      logo: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNWpkRHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--03b3d677c23e7cca369bfe42c0698c7946968f44/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2RwUm1sRyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--d55b6722f71e82d147ad94b8445be27797820f9f/nal-vi-t-nam-nal-global-career-logo.png',
      title: 'Front-end Dev (Angular/ReactJS/VueJS)',
      salary: '1,300 - 2,000 USD',
      skills: ['Angular', 'ReactJS', 'VueJS'],
      location: 'Ha Noi',
      postedDate: '6d',
      hotTag: true,
    },
    {
      id: '7',
      logo: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNWpkRHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--03b3d677c23e7cca369bfe42c0698c7946968f44/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2RwUm1sRyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--d55b6722f71e82d147ad94b8445be27797820f9f/nal-vi-t-nam-nal-global-career-logo.png',
      title: 'Front-end Dev (Angular/ReactJS/VueJS)',
      salary: '1,300 - 2,000 USD',
      skills: ['Angular', 'ReactJS', 'VueJS'],
      location: 'Ha Noi',
      postedDate: '6d',
    },
  ];

  return (
    <div className={cx('wrapper')}>
      <Sidebar jobList={jobList} />
      <div className={cx('detail')}>
        <JobHeader />
        <JobOverview />
      </div>
    </div>
  );
}

export default JobResult;
