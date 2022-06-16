import axios from 'axios'

export const getSearchData = async (content: string) => {
  const response = await axios.get('/api/v1/search/shop.json', {
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

// export const getAutoCompleteData = async () => {
//   const response = await axios.post(
//     'https://cloudsearch.apigw.ntruss.com/CloudSearch/real/v1/domain/name/document/search/autocomplete',
//     {
//       params: {
//         type: 'section',
//         query: 'ㅎ',
//       },
//       headers: {
//         'x-ncp-apigw-signature-v2': '1505290625682',
//         'x-ncp-apigw-timestamp': process.env.REACT_APP_NAVER_SECRET_KEY,
//         'x-ncp-iam-access-key': process.env.REACT_APP_NAVER_CLOUD_ACCESS_KEY,
//       },
//     }
//   )

//   return response
// }
