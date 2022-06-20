import classNames from 'classnames/bind';

import styles from './JobContent.module.scss';
import { useStore } from '~/components/JobResult/store/useStore';

const cx = classNames.bind(styles);

function JobContent() {
  const [state] = useStore();
  const { selectedJob } = state;

  console.log('Content: ', selectedJob);

  return (
    <h1>Content</h1>

    // <div className={cx('wrapper')}>
    //   <h2 className={cx('title')}>Top 3 Reasons To Join Us</h2>
    //   <ul className={cx('detail', 'hightlight')}>
    //     {selectedJob.reasonToJoin.map((item, index) => (
    //       <li key={index}>
    //         {selectedJob.id} {item}
    //       </li>
    //     ))}
    //   </ul>

    //   <h2 className={cx('title')}>Job Description</h2>
    //   <ul className={cx('detail')}>
    //     {selectedJob.description.map((item, index) => (
    //       <li key={index}>{item}</li>
    //     ))}
    //   </ul>

    //   <h2 className={cx('title')}>Your Skills and Experience</h2>
    //   {selectedJob.requirements.map((item, index) => (
    //     <div key={index}>
    //       {item.subTitle && <h3 className={cx('sub-title')}>{`${item.subTitle}: `}</h3>}
    //       <ul className={cx('detail')}>
    //         {item.content.map((requirement, index2) => (
    //           <li key={index2}>{requirement}</li>
    //         ))}
    //       </ul>
    //     </div>
    //   ))}

    //   <h2 className={cx('title')}>Why You'll Love Working Here</h2>
    //   <ul className={cx('detail')}>
    //     {selectedJob.benefit.map((item, index) => (
    //       <li key={index}>{item}</li>
    //     ))}
    //   </ul>
    // </div>
  );
}

export default JobContent;
