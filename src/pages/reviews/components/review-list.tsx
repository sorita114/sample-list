import React, { useEffect, useState } from 'react';
import type { FC } from 'react';
import { css } from '@emotion/react';
import type { ReviewsResult } from 'src/@type/dto';
import theme from '@styles/theme';
import useReviews from '@hooks/use-reviews';

type Props = {
  q?: string
};

const ReviewList:FC<Props> = ({ q }) => {
  const { reviews } = useReviews();
  const [ list, setList ] = useState<ReviewsResult[]>([]);

  const renderStar = (counts:number) => {
    const result = [];

    for(let i = 0; i < counts; i++){
      result.push(<span key={i} />);
    }

    return result;
  };

  useEffect(() => {
    if(q !== ''){
      const filteredReviews = reviews.filter(item => item.title.includes(q));

      setList(filteredReviews);
    }else{
      setList(reviews);
    }
  }, [ q, reviews ]);

  return (
    <>
      {Boolean(list.length) && (
        <section css={styled}>
          <header>
            <h1>리뷰 검색</h1>
          </header>
          <ul>
            {list.map((review, index) => (
              <li key={index}>
                <h1>{review.title}</h1>
                <p>{review.comment}</p>
                <div>
                  {renderStar(review.score)}
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
};

const styled = css({
  padding: 30,
  '> ul': {
    '> li': {
      height: 100,
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'column',
      justifyContent: 'center',
      marginBottom: 10,
      gap: 10,
      border: `1px solid ${theme.border.colors.default}`,
      borderRadius: theme.border.radius.large,
      backgroundColor: theme.backgroundColor.white,
      padding: '15px 30px',
      '> h1': {
        marginBottom: 0
      },
      '> div': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 5,
        '> span': {
          borderRadius: 7.5,
          width: 15,
          height: 15,
          display: 'inline-block',
          backgroundColor: theme.backgroundColor.box,
          border: `1px solid ${theme.border.colors.box}`
        }
      }
    }
  }
});

export default ReviewList;