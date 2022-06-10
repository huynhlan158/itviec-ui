import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './JobsBySkill.module.scss';

const cx = classNames.bind(styles);

function JobsBySkill({ children }) {
  return <h1>JobsBySkill</h1>;
}

JobsBySkill.propTypes = {
  children: PropTypes.node,
};

export default JobsBySkill;
