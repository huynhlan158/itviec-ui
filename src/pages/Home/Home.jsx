import { memo, useEffect } from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import HeadSearch from './HeadSearch';
import JobResult from '~/components/JobResult';
import TopCompanies from './TopCompanies';
import BlogEntries from './BlogEntries';
import * as actions from '~/state/actions';
import { useGlobalStore } from '~/store/useGlobalStore';
import { setupServer } from '~/fakeApis';

const cx = classNames.bind(styles);

setupServer();

function Home() {
  const [state, dispatch] = useGlobalStore();
  const { recommendedJobList } = state;

  // will call api
  const user = {
    skills: ['React', 'ReactJS', 'Front-end'],
  };

  useEffect(() => {
    // set scroll to top when loading the page
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    // call api & set states
    axios.get('/api/it-jobs').then((res) => {
      const jobList = res.data.jobs;
      const recommendedJobList = jobList.filter((job) => {
        const skillsLowerCase = job.skills.map((skill) => skill.toLowerCase());
        let jobMatch = false;

        user.skills.forEach((tag) => {
          if (skillsLowerCase.includes(tag.toLowerCase())) {
            jobMatch = true;
          }
        });

        return jobMatch;
      });

      dispatch(actions.setJobList(jobList));
      dispatch(actions.setRecommendedJobList(recommendedJobList));
      dispatch(actions.setSelectedJob(recommendedJobList[0]));
      dispatch(actions.setCompanyList(res.data.companies));

      const selectedCompany = res.data.companies.find((company) => company.id === res.data.jobs[0].companyId);
      dispatch(actions.setSelectedCompany(selectedCompany));
    });
  }, []);

  return (
    <div className={cx('wrapper')}>
      <HeadSearch />
      <JobResult jobList={recommendedJobList} />
      <TopCompanies />
      <BlogEntries />
    </div>
  );
}

export default memo(Home);
