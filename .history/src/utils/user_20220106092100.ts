import { User } from "screens/project-list/search-panel";
import { cleanObject, useMount } from "utils";
import { useHttp } from "./http";
import { useAsync } from "./use-async";

export const useUser = (param?: Partial<User>) => {
  const client = useHttp();
  const { run, ...result } = useAsync<User[]>();

  useMount(() => {
    client("users", { data: cleanObject(param || {}) });
  });
};
