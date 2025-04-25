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
    createMenu: builder.mutation({
      query: (userInfo) => ({
        url: "/providers/menu",
        method: "POST",
        body: userInfo,
      }),
    }),
    getOrders: builder.query({
      query: () => "/providers/orders",
    }),
    getMenu: builder.query({
      query: () => "/providers",
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
  useSingleOrderQuery,
  useCreateMenuMutation,
  useGetMenuQuery
} = orderApi;
