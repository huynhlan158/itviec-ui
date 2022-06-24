import { useEffect } from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';

import styles from './Jobs.module.scss';
import FilterJobs from './FilterJobs';
import JobResult from '~/components/JobResult';
import { useGlobalStore } from '~/store/useGlobalStore';
import * as actions from '~/state/actions';

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
      dispatch(actions.setSelectedJob(res.data.jobs[0]));
      dispatch(actions.setCompanyList(res.data.companies));

      if (searchJobList.length === 0) {
        dispatch(actions.setSearchJobList(res.data.jobs));
      }
      if (filteredJobList.length === 0) {
        dispatch(actions.setFilteredJobList(res.data.jobs));
      }

      const selectedCompany = res.data.companies.find((company) => company.id === res.data.jobs[0].companyId);
      dispatch(actions.setSelectedCompany(selectedCompany));
    });
  }, []);

  return (
    <div className={cx('wrapper')}>
      <FilterJobs />
      <JobResult jobList={filteredJobList} />
    </div>
  );
}

export default Jobs;
