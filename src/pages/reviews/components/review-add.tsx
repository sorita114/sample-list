import React, { ChangeEvent, FormEvent, FormEventHandler, useEffect, useState } from 'react';
import type { FC } from 'react';
import { OptionsT } from 'src/@types/options';
import { css } from '@emotion/react';
import theme from '@styles/theme';

const ReviewAdd: FC = () => {
  const [options, setOptions] = useState<OptionsT[]>([])
  const [title, setTitle] = useState<string>('')
  const [comment, setComment] = useState<string>('')
  const [grade, setGrade] = useState<number>(5)

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;

    setTitle(value)
  }

  const handleChangeComment = (e: ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;

    setComment(value)
  }

  const handleChangeGrade = (e: ChangeEvent<HTMLSelectElement>) => {
    const {value} = e.target;

    setGrade(Number(value))
  }

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    console.log('submit')
  }


  useEffect(() => {
    setOptions([{
      name: '5점',
      value: 5
    }, {
      name: '4점',
      value: 4
    }, {
      name: '3점',
      value: 3
    }, {
      name: '2점',
      value: 2
    }, {
      name: '1점',
      value: 1
    }])
  }, []);

  return (
    <section css={styled}>
      <header>
        <h1>신규 리뷰 등록</h1>
      </header>
      <form>
        <div>
          <label htmlFor="movie-title">영화 제목</label>
          <input type="text" placeholder="제목을 입력해 주세요." id="movie-title" value={title} onChange={handleChangeTitle}/>
        </div>
        <div>
          <label htmlFor="movie-comment">한줄평</label>
          <input type="text" placeholder="내용을 입력해 주세요." id="movie-comment" value={comment} onChange={handleChangeComment}/>
        </div>
        <div>
          <label htmlFor="movie-grade">별점</label>
          <select name="grade" id="movie-grade" onChange={handleChangeGrade} value={grade}>
            {options.map((option, index) => (
              <option value={option.value} key={index}>{option.name}</option>
            ))}
          </select>
        </div>
        <button type="submit" onSubmit={handleSubmit}>
          등록
        </button>
      </form>
    </section>
  )
}

const styled = css({
  marginBottom: 20,
  'form': {
    '> div': {
      display: 'flex',
      flexDirection: 'column',
      gap: 5,
      marginBottom: 10,
      'input, select': {
        height: 40,
        padding: '5px 10px',
        borderRadius: theme.border.radius.default,
        border: `1px solid ${theme.border.colors.default}`,
      }
    }
  },
  'label': {
    color: theme.colors.title,
  }
})

export default ReviewAdd