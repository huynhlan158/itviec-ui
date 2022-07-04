import { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './JobSearchLayout.module.scss';
import * as jobsService from '~/services/jobsService';
import * as actions from '~/state/actions';
import { useGlobalStore } from '~/store/useGlobalStore';
import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';

const cx = classNames.bind(styles);

// will call api
const user = {
  skills: ['React', 'ReactJS', 'Front-end'],
};

function JobSearchLayout({ children }) {
  const [state, dispatch] = useGlobalStore();
  const { searchJobList, filteredJobList } = state;

  // call api & set states
  useEffect(() => {
    const fetchApi = async () => {
      const result = await jobsService.getJobs();

      const recommendedJobList = result.jobs.filter((job) => {
        const skillsLowerCase = job.skills.map((skill) => skill.toLowerCase());
        let jobMatch = false;

        user.skills.forEach((tag) => {
          if (skillsLowerCase.includes(tag.toLowerCase())) {
            jobMatch = true;
          }
        });

        return jobMatch;
      });

      dispatch(actions.setJobList(result.jobs));
      dispatch(actions.setRecommendedJobList(recommendedJobList));
      dispatch(actions.setCompanyList(result.companies));

      // set default data for searchJobList & filteredJobList when accessing the page directly with provided link / refresh the page
      if (searchJobList.length === 0) {
        dispatch(actions.setSearchJobList(result.jobs));
      }
      if (filteredJobList.length === 0) {
        dispatch(actions.setFilteredJobList(result.jobs));
      }
    };

    fetchApi();
  }, []);

  return (
    <div className={cx('wrapper')}>
      <Header search />
      <div className={cx('container')}>{children}</div>
      <Footer />
    </div>
  );
}

JobSearchLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default JobSearchLayout;
