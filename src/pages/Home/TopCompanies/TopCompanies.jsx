import { useEffect, useState } from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';

import styles from './TopCompanies.module.scss';
import TopCompany from './TopCompany';

const cx = classNames.bind(styles);

function TopCompanies() {
  const [topCompanyList, setTopCompanyList] = useState([]);

  useEffect(() => {
    axios.get('/api/top-companies').then((res) => {
      setTopCompanyList(res.data.topCompanies);
    });
  }, []);

  // shuffle the list to have new order everytime the page re-load
  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  };

  shuffle(topCompanyList);

  // then get the first 8 companies only
  const top8 = topCompanyList.slice(0, 8);

  return (
    <div className={cx('wrapper')}>
      <h1 className={cx('title')}>Top Employers</h1>
      <div className={cx('content')}>
        {top8.map((company) => (
          <TopCompany key={company.id} data={company} />
        ))}
      </div>
    </div>
  );
}

export default TopCompanies;
