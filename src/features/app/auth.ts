import { apiSlice } from "./appSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAuth: builder.query({
      query: (userName) => `user/by-email-address/${userName}`,
      providesTags: ["user-auth"],
    }),
  }),
});

export const { useGetAuthQuery } = authApi;
