import classNames from 'classnames/bind';

import styles from './JobContent.module.scss';

const cx = classNames.bind(styles);

// will replace by using context hook
const currentJobSelected = {
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

function JobContent() {
  return (
    <div className={cx('wrapper')}>
      <h2 className={cx('title')}>Top 3 Reasons To Join Us</h2>
      <ul className={cx('detail', 'hightlight')}>
        {currentJobSelected.reasonToJoin.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className={cx('title')}>Job Description</h2>
      <ul className={cx('detail')}>
        {currentJobSelected.description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className={cx('title')}>Your Skills and Experience</h2>
      {currentJobSelected.requirements.map((item, index) => (
        <div key={index}>
          {item.subTitle && <h3 className={cx('sub-title')}>{`${item.subTitle}: `}</h3>}
          <ul className={cx('detail')}>
            {item.content.map((requirement, index2) => (
              <li key={index2}>{requirement}</li>
            ))}
          </ul>
        </div>
      ))}

      <h2 className={cx('title')}>Why You'll Love Working Here</h2>
      <ul className={cx('detail')}>
        {currentJobSelected.benefit.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default JobContent;
