import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID xNpfXRsmzMe7ehAUYbAWIvjGpqWuVQ9Mx1Df7bWIrKg ",
  },
});
