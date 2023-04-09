import { useQuery } from 'react-query';
import axios from 'axios';
import { useCallback, useContext, useEffect, useState } from 'react';
import type { ReviewsResult } from 'src/@type/dto';
import { GlobalReviewsContext } from '@pages/_app.page';

const useReviews = () => {
  const [ loading, setLoading ] = useState<boolean>(false);
  const [ list, setList ] = useState<ReviewsResult[]>([]);
  const [ isFetch, setIsFetch ] = useState<boolean>(false);
  const { reviews, setReviews } = useContext(GlobalReviewsContext);

  const { isLoading } = useQuery<{data: ReviewsResult[]}>('/reivews', () => axios.get("/data.json"), {
    onSuccess: res => {
      const { data } = res;
      setList(data);
    },
    enabled: isFetch
  });

  const saveReviews = useCallback((data:ReviewsResult[]) => {
    localStorage.setItem('reviews', JSON.stringify(data));
  }, []);

  const handleChangeList = (item:ReviewsResult) => {
    setList(prev => [
      ...prev,
      item
    ]
    );
  };

  useEffect(() => {
    if(localStorage){
      const datas = localStorage.getItem('reviews');

      if(datas){
        setLoading(true);
        setList(JSON.parse(datas) as ReviewsResult[]);
        setLoading(false);
      }else{
        setIsFetch(true);
      }
    }
  }, [ setLoading, setReviews, setIsFetch ]);

  useEffect(() => {
    setLoading(isLoading);
  }, [ isLoading ]);

  useEffect(() => {
    if(list.length){
      const sortedData = list
        .sort((prev, next) => next.score - prev.score)
        .sort((prev, next) => next.title > prev.title ? -1 : 1)
;

      if(setReviews){
        setReviews(sortedData);
      }
    }
  }, [ list, setReviews ]);

  useEffect(() => {
    if(reviews && reviews.length > 0){
      saveReviews(reviews);
    }
  }, [ reviews, saveReviews ]);

  return {
    loading,
    reviews,
    saveReviews,
    handleChangeList
  };
};

export default useReviews;