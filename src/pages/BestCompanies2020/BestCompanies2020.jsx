import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './BestCompanies2020.module.scss';

const cx = classNames.bind(styles);

function BestCompanies2020({ children }) {
  return <h1>BestCompanies2020</h1>;
}

BestCompanies2020.propTypes = {
  children: PropTypes.node,
};

export default BestCompanies2020;
