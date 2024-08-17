import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import UserService from "UserService";

// Custom baseQuery with error handling
const baseQueryWithErrorHandling = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: `${"https://uat-beprc.oss.net.bd/api"}/`,
    prepareHeaders: async (headers) => {
      try {
        if (UserService.isLoggedIn()) {
          await UserService.updateKcToken();
          headers.set("Authorization", `Bearer ${UserService.getToken()}`);
        }
      } catch (e) {
        UserService.doLogin(); // Redirect to login if token refresh fails
      }
      return headers;
    },
  });

  const result = await baseQuery(args, api, extraOptions);

  console.log(result);

  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithErrorHandling,
  keepUnusedDataFor: 0,
  tagTypes: [],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  endpoints: (builder) => ({}),
});
