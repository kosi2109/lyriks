import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
 
export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery : fetchBaseQuery({
    baseUrl : 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders : (headers)=> {
        headers.set("X-RapidAPI-Key",'310e57c017msh0d44a2c34ecec2dp137ae9jsnb6a5485e759b')
        return headers;
    }
  }),
  endpoints : (builder) => ({
    getTopCharts : builder.query({query : ()=>  '/charts/world'})
  })

});

export const {useGetTopChartsQuery} = shazamCoreApi;
