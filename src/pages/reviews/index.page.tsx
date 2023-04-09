import React from 'react'
import type { FC } from 'react'
import ReviewList from './components/review-list'
import ReviewAdd from './components/review-add'
import ReviewSearch from './components/review-search'
import { css } from '@emotion/react'

const Reviews: FC = () => {
  return (
    <section css={styled}>
      <ReviewAdd />
      <ReviewSearch />
      <ReviewList />
    </section>
  )
}

const styled = css({
  width: '100%'
})

export default Reviews