import { useQuery } from 'react-query';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import type { ReviewsResultT } from 'src/@type/dto';

const useReviews = () => {
  const [ loading, setLoading ] = useState<boolean>(false);
  const [ list, setList ] = useState<ReviewsResultT[]>([]);
  const [ reviews, setReviews ] = useState<ReviewsResultT[]>([]);
  const [ isFetch, setIsFetch ] = useState<boolean>(false);

  const { isLoading } = useQuery<{data: ReviewsResultT[]}>('/reivews', () => axios.get("/data.json"), {
    onSuccess: res => {
      const { data } = res;
      setList(data);
    },
    enabled: isFetch
  });

  const saveReviews = useCallback((data:ReviewsResultT[]) => {
    localStorage.setItem('reviews', JSON.stringify(data));
  }, []);

  useEffect(() => {
    if(localStorage){
      const datas = localStorage.getItem('reviews');

      if(datas){
        setLoading(true);
        setList(JSON.parse(datas) as ReviewsResultT[]);
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
        .sort((prev, next) => next.title > prev.title ? -1 : 1);

      setReviews(sortedData);
    }
  }, [ list, setReviews ]);

  useEffect(() => {
    if(reviews.length){
      saveReviews(reviews);
    }
  }, [ reviews, saveReviews ]);

  return {
    loading,
    reviews,
    saveReviews
  };
};

export default useReviews;