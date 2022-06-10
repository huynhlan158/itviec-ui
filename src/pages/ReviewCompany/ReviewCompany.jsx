import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './ReviewCompany.module.scss';

const cx = classNames.bind(styles);

function ReviewCompany({ children }) {
  return <h1>ReviewCompany</h1>;
}

ReviewCompany.propTypes = {
  children: PropTypes.node,
};

export default ReviewCompany;
