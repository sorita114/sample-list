import React, { useState } from 'react';
import type { FC } from 'react';
import { css } from '@emotion/react';
import ReviewList from './components/review-list';
import ReviewAdd from './components/review-add';
import ReviewSearch from './components/review-search';
import useReviews from '@hooks/use-reviews';

const Reviews: FC = () => {
  const {reviews, loading} = useReviews();
  const [q, setQuery] = useState<string>('');

  const handleChangeQuery = (query: string) => {
    setQuery(query);
  };

  return (
    <section css={styled}>
      <ReviewAdd />
      <ReviewSearch onChangeQuery={handleChangeQuery}/>
      <ReviewList reviews={reviews} q={q}/>
    </section>
  );
};

const styled = css({
  width: '100%',
});

export default Reviews;