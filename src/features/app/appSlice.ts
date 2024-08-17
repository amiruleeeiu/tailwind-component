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
          headers.set("X-Role", localStorage.getItem("role"));
        }
      } catch (e) {
        UserService.doLogin(); // Redirect to login if token refresh fails
      }
      return headers;
    },
  });

  const result = await baseQuery(args, api, extraOptions);

  if (result.error) {
    if (
      result?.error?.status &&
      typeof result?.error?.status === "number" &&
      400 <= result.error.status &&
      result.error.status <= 499
    ) {
      toastMessage({
        message: result?.error?.data?.message ?? "Bad request",
        type: "error",
      });
    }
    if (
      result?.error?.status &&
      typeof result?.error?.status === "number" &&
      result.error.status >= 500
    ) {
      toastMessage({
        message: "Internal Server Error!",
        type: "error",
      });
    }
  }

  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithErrorHandling,
  keepUnusedDataFor: 0,
  tagTypes: [
    "projectManagementById",
    "milestone-data",
    "user-auth",
    "quarterInfo",
    "quarterDetails",
    "projectManagementById",
  ],
  endpoints: (builder) => ({}),
});
