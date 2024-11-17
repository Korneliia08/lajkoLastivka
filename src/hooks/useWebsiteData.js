import { useMemo } from "react";
import { useSelector } from "react-redux";

const useWebsiteData = (useValue = false) => {
  const data = useSelector((state) => state.general.data);
  const settings = useMemo(() => {
    try {
      if (!data || !Array.isArray(data)) {
        return {}; // Zwróć pusty obiekt, jeśli dane są nieprawidłowe
      }

      return data.reduce((acc, item) => {
        acc[item.name] = useValue ? item.value : item.value_pl;
        return acc;
      }, {});
    } catch (error) {
      return undefined;
    }
  }, [data, useValue]);

  const get = (param, defaultValue = "---") => {
    if (settings) {
      return settings[param] || defaultValue;
    }
    return defaultValue;
  };
  const getWithData = (param, defaultValue = "---") => {
    if (settings) {
      try {
        if (settings[param].indexOf("imObject") != -1) {
          return JSON.parse(settings[param]).data || defaultValue;
        }
      } catch (error) {
        return defaultValue;
      }
      return settings[param].data || defaultValue;
    }
    return defaultValue;
  };

  return { get, getWithData };
};

export default useWebsiteData;
