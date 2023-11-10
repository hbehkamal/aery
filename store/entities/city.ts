import { api } from "../api";

export const cityApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCities: builder.query<
      {
        data: {
          country: string;
          name: string;
          lat: string;
          lng: string;
        };
      },
      unknown
    >({
      query: () => ({ url: "cities" }),
      providesTags: ["City"],
    }),
  }),
});

export const { useGetCitiesQuery } = cityApi;
