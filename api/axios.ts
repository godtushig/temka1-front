import axios from "axios";

// Function to create Axios client
export const createAxiosClient = () => {
  const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
  });

  // Set up an Axios request interceptor to dynamically add the Accept-Language header
  client.interceptors.request.use((config) => {
    const language = localStorage.getItem("language") || "mn"; // Default to Mongolian

    if (config.headers) {
      config.headers["Accept-Language"] = language; // Add the language header
    }

    return config;
  });

  return client;
};

export const client = createAxiosClient(); // Create and export the Axios client
