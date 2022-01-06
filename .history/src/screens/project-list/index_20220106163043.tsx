import React from "react";
import { List } from "./list";
import { SearchPanel } from "./search-panel";
import { useState } from "react";
import { useDebounce } from "utils/index";
import styled from "@emotion/styled";
import { Typography } from "antd";
import { useProject } from "utils/project";
import { useUser } from "utils/user";
// import { Helmet } from "react-helmet";

export const ProjectListScreen = () => {
  // 搜索框
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  const debounceParam = useDebounce(param, 500);

  const { data: list, error, isLoading } = useProject(debounceParam);

  const { data: users } = useUser();

  return (
    <Container>
      {/* <Helmet>
        <title>项目列表</title>
      </Helmet> */}
      <h1>项目列表</h1>
      <SearchPanel param={param} setParam={setParam} users={users || []} />
      {error ? (
        <Typography.Text type="danger">{error.message}</Typography.Text>
      ) : null}
      <List loading={isLoading} users={users || []} dataSource={list || []} />
    </Container>
  );
};

const Container = styled.div`
  padding: 3.2rem;
`;
