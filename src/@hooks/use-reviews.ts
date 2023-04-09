import { useQuery } from 'react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ReviewsResultT } from '@types/dto';

const useReviews = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [reviews, setReviews] = useState<ReviewsResultT[]>([])
  const [isFetch, setIsFetch] = useState<boolean>(false);

  const {isLoading} = useQuery<{data: ReviewsResultT[]}>('/reivews', () => {
    return axios.get('/data.json')
  }, {
    onSuccess: (res => {
      const {data} = res
      
      setReviews(data);
      saveReviews(data);
    }),
    enabled: isFetch
  })

  const saveReviews = (data: ReviewsResultT[]) => {
    localStorage.setItem('reviews', JSON.stringify(data))
  }

  useEffect(() => {
    if(localStorage) {
      const datas = localStorage.getItem('reviews');

      if(!!datas) {
        setLoading(true);
        setReviews(JSON.parse(datas) as ReviewsResultT[])
        setLoading(false);
      } else {
        setIsFetch(true);
      } 
    }
  }, [setLoading, setReviews, setIsFetch]);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading])

  return {
    loading,
    reviews,
    saveReviews
  }
}

export default useReviews;