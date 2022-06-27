import { useEffect } from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';

import styles from './Jobs.module.scss';
import FilterJobs from './FilterJobs';
import JobResult from '~/components/JobResult';
import { useGlobalStore } from '~/store/useGlobalStore';
import * as actions from '~/state/actions';
import config from '~/config';
import Path from '~/components/Path';

const cx = classNames.bind(styles);

// will call api
const user = {
  skills: ['React', 'ReactJS', 'Front-end'],
};

function Jobs() {
  const [state, dispatch] = useGlobalStore();
  const { filteredJobList, searchJobList } = state;

  useEffect(() => {
    // set scroll to top when loading the page
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    // call api & set states
    axios.get('/api/it-jobs').then((res) => {
      const recommendedJobList = res.data.jobs.filter((job) => {
        const skillsLowerCase = job.skills.map((skill) => skill.toLowerCase());
        let jobMatch = false;

        user.skills.forEach((tag) => {
          if (skillsLowerCase.includes(tag.toLowerCase())) {
            jobMatch = true;
          }
        });

        return jobMatch;
      });

      dispatch(actions.setJobList(res.data.jobs));
      dispatch(actions.setRecommendedJobList(recommendedJobList));
      dispatch(actions.setCompanyList(res.data.companies));

      // to set default data for searchJobList & filteredJobList when accessing the page directly with provided link / refresh the page
      if (searchJobList.length === 0) {
        dispatch(actions.setSearchJobList(res.data.jobs));
      }
      if (filteredJobList.length === 0) {
        dispatch(actions.setFilteredJobList(res.data.jobs));
      }
    });
  }, []);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <FilterJobs />
        <JobResult jobList={filteredJobList} />
      </div>

      <Path items={[{ title: 'Home', to: config.routes.home }, { title: 'All IT Jobs' }]} />
    </div>
  );
}

export default Jobs;
