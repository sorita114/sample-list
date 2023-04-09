import '@styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@emotion/react';
import type { ReviewsResult } from '@types/dto';
import type { Dispatch, SetStateAction } from 'react';
import { createContext, useState } from 'react';
import theme from '@styles/theme';
import DefaultLayout from '@layouts/default';

interface IGlobalReviewsContext{
  reviews?:ReviewsResult[];
  setReviews?:Dispatch<SetStateAction<ReviewsResult[]>>;
}

export const GlobalReviewsContext = createContext<IGlobalReviewsContext>({});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

export default function App({ Component, pageProps }:AppProps){
  const [ reviews, setReviews ] = useState<ReviewsResult[]>([]);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalReviewsContext.Provider value={{ reviews, setReviews }}>
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        </GlobalReviewsContext.Provider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}