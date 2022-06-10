import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home({ children }) {
  return <h1>Home</h1>;
}

Home.propTypes = {
  children: PropTypes.node,
};

export default Home;
