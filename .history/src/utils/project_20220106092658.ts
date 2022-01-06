import { useEffect } from "react";
import { Project } from "screens/project-list/list";
import { cleanObject } from "utils";
import { useHttp } from "./http";
import { useAsync } from "./use-async";

// TODO 将异步函数继续封装
export const useProject = (param?: Partial<Project>) => {
  const { run, ...result } = useAsync<Project[]>();
  
  const client = useHttp();

  useEffect(() => {
    run(client("projects", { data: cleanObject(param || {}) }));
  }, [param]);

  return result;
};
