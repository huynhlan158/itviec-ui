import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './CompanyImage.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function CompanyImage({ className, to, src, alt }) {
  return (
    <NavLink to={to} className={cx('wrapper', className)}>
      <Image src={src} alt={alt} />
    </NavLink>
  );
}

CompanyImage.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default CompanyImage;
