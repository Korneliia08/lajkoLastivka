import { useEffect, useState } from "react";
import axiosWithUrl from "../providers/interceptors/AxiosWithUrl.js";

const useFetch = (
  url,
  options = { withPagination: false, limit: 999, page: 1, default: [] },
) => {
  options = {
    ...{ withPagination: false, limit: 999, page: 1, default: [] },
    ...options,
  };
  const [data, setData] = useState(options.default);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({});
  const [page, setPage] = useState(options.page);
  useEffect(() => {
    setLoading(true);
    axiosWithUrl
      .get(url + `?limit=${options.limit}&page=${page}`)
      .then((res) => {
        if (options.withPagination) {
          setData(res.data.data);
          setPagination(res.data.pagination);
        } else {
          setData(res.data);
        }
      })
      .catch((error) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url, page, options.limit, options.withPagination]);
  if (options.withPagination) {
    return {
      data: data,
      loading,
      error,
      pagination: { ...pagination, page, setPage },
    };
  } else {
    return { data: data, loading, error };
  }
};
export default useFetch;
