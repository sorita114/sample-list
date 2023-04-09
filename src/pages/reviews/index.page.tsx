import React, { useState } from 'react'
import type { FC } from 'react'
import ReviewList from './components/review-list'
import ReviewAdd from './components/review-add'
import ReviewSearch from './components/review-search'
import { css } from '@emotion/react'
import useReviews from '@hooks/use-reviews'

const Reviews: FC = () => {
  const {reviews, loading} = useReviews();

  return (
    <section css={styled}>
      <ReviewAdd />
      <ReviewSearch />
      <ReviewList reviews={reviews}/>
    </section>
  )
}

const styled = css({
  width: '100%'
})

export default Reviews