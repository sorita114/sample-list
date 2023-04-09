import React, { useEffect, useState } from 'react';
import type { ChangeEvent } from 'react';
import type { FC } from 'react';
import { css } from '@emotion/react';
import theme from '@styles/theme';

type Props = {
  onChangeQuery: (query:string) => void
};

const ReviewSearch:FC<Props> = ({ onChangeQuery }) => {
  const [ query, setQuery ] = useState<string>("");

  const handleChangeQuery = (e:ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setQuery(value);
  };

  useEffect(() => {
    onChangeQuery(query);
  }, [ query, onChangeQuery ]);

  return (
    <section css={styled}>
      <header>
        <h1>리뷰 검색</h1>
      </header>
      <div>
        <input type="text" value={query} onChange={handleChangeQuery} placeholder="영화 제목을 입력해 주세요." />
      </div>
    </section>
  );
};

const styled = css({
  background: theme.backgroundColor.white,
  padding: 30,
  '> div': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '> input': {
      width: '100%',
      height: 30,
      background: theme.backgroundColor.default,
      padding: '5px 10px',
      border: `1px solid ${theme.border.colors.default}`,
      borderRadius: theme.border.radius.default
    }
  }
});

export default ReviewSearch;