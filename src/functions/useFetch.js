import {useEffect, useState} from "react";
import api from "../providers/interceptors/refreshToken.interceptor.js";

const useFetch = (
    url,
    options = {withPagination: false, limit: 999, page: 1, default: [], params: ''},
) => {
    options = {
        ...{withPagination: false, limit: 999, page: 1, default: [], params: ''},
        ...options,
    };
    const [data, setData] = useState(options.default);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState({});
    const [page, setPage] = useState(options.page);
    useEffect(() => {
        setLoading(true);


        api
            .get(url + `?limit=${options.limit}&page=${page}${options.params}`)
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
    }, [url, page, options.limit, options.withPagination, options.params]);
    if (options.withPagination) {
        return {
            data: data,
            loading,
            error,
            pagination: {...pagination, page, setPage},
        };
    } else {
        return {data: data, loading, error};
    }
};
export default useFetch;
