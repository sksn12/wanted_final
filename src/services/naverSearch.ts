import axios from 'axios'

export const getSearchData = async (content: string) => {
  const response = await axios.get('/v1/search/shop.json', {
    params: {
      query: content,
      display: 10,
    },
    headers: {
      'X-Naver-Client-Id': process.env.REACT_APP_NAVER_ID_KEY,
      'X-Naver-Client-Secret': process.env.REACT_APP_NAVER_SECRET_KEY,
    },
  })

  return response.data.items
}
