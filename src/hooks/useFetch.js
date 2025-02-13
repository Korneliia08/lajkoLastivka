import { useEffect, useState } from "react";
import api from "../providers/interceptors/refreshToken.interceptor.js";

/**
 * Hook `useFetch` umożliwia łatwe wykonywanie żądań HTTP w aplikacjach React z opcjonalną obsługą paginacji oraz automatycznego odświeżania danych.
 *
 * @param {string} url - Adres URL, do którego ma zostać wykonane żądanie.
 * @param {Object} [options={}] - Opcjonalne parametry konfiguracyjne żądania:
 *   - `withPagination` {boolean} - Czy obsługiwać paginację wyników (domyślnie: `false`).
 *   - `limit` {number} - Liczba elementów do pobrania na jedną stronę (domyślnie: `999`).
 *   - `page` {number} - Początkowy numer strony wyników (domyślnie: `1`).
 *   - `default` {Array|any} - Domyślna wartość danych, zanim odpowiedź zostanie załadowana (domyślnie: `[]`).
 *   - `params` {string} - Dodatkowe parametry zapytania w formacie string (np. `&sort=name`).
 *   - `autoRefresh` {number|undefined} - Okres odświeżania danych w milisekundach. Jeśli `undefined`, odświeżanie jest wyłączone (domyślnie: `undefined`).
 *
 * @returns {Object} - Zwracany obiekt zawiera dane oraz funkcje do zarządzania stanem:
 *   - `data` {any} - Wynik żądania (przetworzony na podstawie odpowiedzi API).
 *   - `loading` {boolean} - Czy dane są aktualnie ładowane (`true` w trakcie żądania, `false` po zakończeniu).
 *   - `error` {boolean} - Czy wystąpił błąd podczas wykonywania żądania (`true` jeśli błąd wystąpił, `false` w przeciwnym razie).
 *   - `pagination` {Object|undefined} - Obiekt paginacji (tylko jeśli `withPagination` jest `true`):
 *     - `page` {number} - Bieżący numer strony.
 *     - `setPage` {Function} - Funkcja pozwalająca zmienić bieżący numer strony.
 *     - Inne dane paginacji zwrócone przez API.
 *
 * @example
 * // Przykład użycia bez paginacji:
 * const { data, loading, error } = useFetch('/api/data', {
 *   default: [],
 *   autoRefresh: 5000,
 * });
 *
 * @example
 * // Przykład użycia z paginacją:
 * const { data, loading, error, pagination } = useFetch('/api/data', {
 *   withPagination: true,
 *   limit: 10,
 *   page: 1,
 * });
 *
 * // Zmiana strony
 * pagination.setPage(2);
 */
const useFetch = (url, options = {}) => {
  options = {
    ...{
      withPagination: false,
      limit: 999,
      page: 1,
      default: [],
      params: "",
      autoRefresh: -1,
    },
    ...options,
  };
  const [data, setData] = useState(options.default);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [raw, setRaw] = useState();
  const [pagination, setPagination] = useState({});
  const [page, setPage] = useState(options.page);
  const [autoRefresh, setAutoRefresh] = useState(0);
  useEffect(() => {
    if (options.autoRefresh > 80) {
      const intervalId = setInterval(() => {
        setAutoRefresh((prev) => {
          return prev + 1;
        });
      }, options.autoRefresh);
      return () => {
        clearInterval(intervalId); // Usuwamy interwał po zakończeniu
      };
    }
  }, [options.autoRefresh]);

  useEffect(() => {
    setLoading(true);

    api
      .get(
        url +
          `?autoRefresh=${autoRefresh}&limit=${options.limit}&page=${page}${options.params}`,
      )
      .then((res) => {
        //   setRaw(res.data);
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
  }, [
    url,
    page,
    options.limit,
    options.withPagination,
    options.params,
    autoRefresh,
  ]);
  if (options.withPagination) {
    return {
      data: data,
      loading,
      error,
      pagination: { ...pagination, page, setPage },
      raw,
    };
  } else {
    return { data: data, loading, error, raw };
  }
};
export default useFetch;
