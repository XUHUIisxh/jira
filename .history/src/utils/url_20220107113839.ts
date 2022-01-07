import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

/**
 * 返回url中，指定键的参数值
 */
export const useUrlQueryParams = <K extends string>(keys: K[]) => {
  const [searchParams, setSearchParams] = useSearchParams();
  searchParams.get("name");
  return [
    //   TODO 用 useMemo 解决无限循环的问题
    useMemo(
      () =>
        keys.reduce((prev, key) => {
          return { ...prev, [key]: searchParams.get(key) || "" };
        }, {}) as { [key in K]: string },
      [searchParams]
    ),
    setSearchParams,
  ] as const;
};
