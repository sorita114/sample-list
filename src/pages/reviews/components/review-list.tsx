import { ReviewsResultT } from '@types/dto';
import React from 'react';
import type { FC } from 'react'

type Props = {
  reviews: ReviewsResultT[]
}

const ReviewList: FC<Props> = ({reviews}) => {
  return (
    <section>
      <header>
        <h1>리뷰 검색</h1>
      </header>
    </section>
  )
}

export default ReviewList