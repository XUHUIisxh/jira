import { useSearchParams } from "react-router-dom";

/**
 * 返回url中，指定键的参数值
 */
export const useUrlQueryParams = (keys: string[]) => {
  const [searchParams, setSearchParams] = useSearchParams();
  searchParams.get("name");
  return [
    keys.reduce((prev, key) => {
      return { ...prev, [key]: searchParams.get(key) };
    }, {}),
    setSearchParams,
  ];
};
