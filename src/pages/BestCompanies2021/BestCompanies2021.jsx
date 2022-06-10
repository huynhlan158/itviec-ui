import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './BestCompanies2021.module.scss';

const cx = classNames.bind(styles);

function BestCompanies2021({ children }) {
  return <h1>BestCompanies2021</h1>;
}

BestCompanies2021.propTypes = {
  children: PropTypes.node,
};

export default BestCompanies2021;
