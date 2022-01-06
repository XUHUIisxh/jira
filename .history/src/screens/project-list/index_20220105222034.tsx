import React from "react";
import { List, Project } from "./list";
import { SearchPanel } from "./search-panel";
import { useState, useEffect } from "react";
import { cleanObject, useMount, useDebounce } from "utils/index";
import * as qs from "qs";
import { useHttp } from "utils/http";
import styled from "@emotion/styled";
import { useAsync } from "utils/use-async";
import { Typography } from "antd";

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  // 搜索框
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  // 用户列表
  const [users, setUsers] = useState([]);

  // 结果列表
  const [list, setList] = useState([]);

  const debounceParam = useDebounce(param, 500);

  const client = useHttp();

  const { run, data, error, isLoading } = useAsync<Project[]>();

  useEffect(() => {
    run(client("projects", { data: cleanObject(debounceParam) }));
  }, [debounceParam]);

  useMount(() => {
    client("users").then(setUsers);
  });

  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel param={param} setParam={setParam} users={users} />
      {error ? (
        <Typography.Text type="danger">{error.message}</Typography.Text>
      ) : null}
      <List loading={isLoading} users={users} dataSource={data || []} />
    </Container>
  );
};

const Container = styled.div`
  padding: 3.2rem;
`;
