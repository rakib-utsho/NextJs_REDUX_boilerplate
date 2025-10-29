import baseApi from "../baseApi";

export const testapi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getReviews: builder.query({
      query: () => ({
        url: "/reviews",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetReviewsQuery } = testapi;
