import { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './MainLayout.module.scss';
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

function MainLayout({ children }) {
  const [, dispatch] = useGlobalStore();

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
    };

    fetchApi();
  }, []);

  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
