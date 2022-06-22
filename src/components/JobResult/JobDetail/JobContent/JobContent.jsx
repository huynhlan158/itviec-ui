import classNames from 'classnames/bind';

import styles from './JobContent.module.scss';
import { useGlobalStore } from '~/store/useGlobalStore';

const cx = classNames.bind(styles);

function JobContent() {
  const [state] = useGlobalStore();
  const { selectedJob } = state;

  if (selectedJob.id) {
    return (
      <div className={cx('wrapper')}>
        {selectedJob.reasonToJoin && <h2 className={cx('title')}>Top 3 Reasons To Join Us</h2>}
        <ul className={cx('detail', 'hightlight')}>
          {selectedJob.reasonToJoin?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2 className={cx('title')}>Job Description</h2>
        {selectedJob.description?.map((item, index) => (
          <div key={index}>
            {item.title && <h3 className={cx('sub-title')}>{`${item.title}: `}</h3>}
            {item.detail && (
              <ul className={cx('detail')}>
                {item.detail?.map((discription, index2) => {
                  if (item.detail.length > 1) {
                    return <li key={index2}>{discription}</li>;
                  } else {
                    return <p key={index2}>{discription}</p>;
                  }
                })}
              </ul>
            )}
          </div>
        ))}

        <h2 className={cx('title')}>Your Skills and Experience</h2>
        {selectedJob.requirements?.map((item, index) => (
          <div key={index}>
            {item.title && <h3 className={cx('sub-title')}>{`${item.title}: `}</h3>}
            <ul className={cx('detail')}>
              {item.detail?.map((requirement, index2) => {
                if (item.detail.length > 1) {
                  return <li key={index2}>{requirement}</li>;
                } else {
                  return <p key={index2}>{requirement}</p>;
                }
              })}
            </ul>
          </div>
        ))}

        <h2 className={cx('title')}>Why You'll Love Working Here</h2>
        <ul className={cx('detail')}>
          {selectedJob.benefit?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default JobContent;
