import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (userInfo) => ({
        url: "/customers/order",
        method: "POST",
        body: userInfo,
      }),
    }),
    getOrders: builder.query({
      query: () => "/customers/orders",
    }),

    singleOrder: builder.query({
      query: (id) => ({
        url: `/order/${id}`,
        params: {id},
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetOrdersQuery,
  useSingleOrderQuery
} = orderApi;
