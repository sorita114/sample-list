import React, { useState } from 'react';
import type { FC } from 'react';
import { css } from '@emotion/react';
import ReviewList from './components/review-list';
import ReviewAdd from './components/review-add';
import ReviewSearch from './components/review-search';

const Reviews:FC = () => {
  const [query, setQuery] = useState<string>("");

  const handleChangeQuery = (searchKeyword:string) => {
    setQuery(searchKeyword);
  };

  return (
    <section css={styled}>
      <ReviewAdd />
      <ReviewSearch onChangeQuery={handleChangeQuery}/>
      <ReviewList q={query}/>
    </section>
  );
};

const styled = css({
  width: '100%',
});

export default Reviews;