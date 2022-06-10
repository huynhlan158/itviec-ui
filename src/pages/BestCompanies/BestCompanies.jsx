import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './BestCompanies.module.scss';

const cx = classNames.bind(styles);

function BestCompanies({ children }) {
  return <h1>BestCompanies</h1>;
}

BestCompanies.propTypes = {
  children: PropTypes.node,
};

export default BestCompanies;
