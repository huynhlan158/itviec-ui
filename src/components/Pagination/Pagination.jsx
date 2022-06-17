import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Pagination.module.scss';

const cx = classNames.bind(styles);

function Pagination({ className, lastPage, currentPage = 1, paginate }) {
  let pageNumbers = [];

  if (currentPage <= 3) {
    for (let i = 1; i <= currentPage + 1; i++) {
      pageNumbers.push(i);
    }

    pageNumbers = [...pageNumbers, '...', lastPage];
  } else if (currentPage >= lastPage - 2) {
    pageNumbers = [1, '...'];

    for (let i = currentPage - 1; i <= lastPage; i++) {
      pageNumbers.push(i);
    }
  } else {
    pageNumbers = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', lastPage];
  }

  return (
    <nav>
      <ul className={cx('wrapper', className)}>
        {/* back button */}
        {currentPage > 1 && (
          <li className={cx('page-number')} onClick={() => paginate(currentPage - 1)}>
            {'<'}
          </li>
        )}

        {/* pages */}
        {pageNumbers.map((page, index) => {
          if (page === '...') {
            return (
              <li className={cx('dot')} key={index}>
                {page}
              </li>
            );
          } else {
            return (
              <li
                className={cx('page-number', { active: page === currentPage })}
                key={index}
                onClick={() => paginate(page)}
              >
                {page}
              </li>
            );
          }
        })}

        {/* next button */}
        {currentPage < lastPage && (
          <li className={cx('page-number')} onClick={() => paginate(currentPage + 1)}>
            {'>'}
          </li>
        )}
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  className: PropTypes.string,
  postsPerPage: PropTypes.number,
  totalPost: PropTypes.number,
  paginate: PropTypes.func,
};

export default Pagination;
