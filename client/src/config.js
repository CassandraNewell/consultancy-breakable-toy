export const config = {
  apiClient: {
    baseUri: "/api/v1",
  },
  env: process.env.NODE_ENV || "development",
  validation: {
    email: {
      regexp: {
        emailRegex: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      },
    },
  },
}
