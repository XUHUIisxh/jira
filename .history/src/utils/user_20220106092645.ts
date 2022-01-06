import { useEffect } from "react";
import { User } from "screens/project-list/search-panel";
import { cleanObject, useMount } from "utils";
import { useHttp } from "./http";
import { useAsync } from "./use-async";

export const useUser = (param?: Partial<User>) => {
  const client = useHttp();

  const { run, ...result } = useAsync<User[]>();

  useEffect(() => {
    run(client("users", { data: cleanObject(param || {}) }));
  }, [param]);
  console.log("🚀 ~ file: user.ts ~ line 9 ~ useUser ~ result", result);
  return result;
};
