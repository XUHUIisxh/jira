import { jsx } from "@emotion/react";
import { Form, Input, Select } from "antd";
import React from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
  token: string;
}

interface SearchPanel {
  users: User[];
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: SearchPanel["param"]) => void;
}

export const SearchPanel = ({ param, setParam, users }: SearchPanel) => {
  return (
    <Form layout="inline">
      <Form.Item>
        {/* setParam(Object.assign({}, param, { name: evt.target.value })) */}
        <Input
          placeholder="项目名"
          type="text"
          value={param.name}
          onChange={(e) =>
            setParam({
              ...param,
              name: e.target.value,
            })
          }
        />
      </Form.Item>
      <Form.Item>
        <Select
          value={param.personId}
          onChange={(value) =>
            setParam({
              ...param,
              personId: value,
            })
          }
        >
          <Select.Option value={""}>负责人</Select.Option>
          {users.map((user) => (
            <Select.Option key={user.id} value={user.id}>
              {user.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
    </Form>
  );
};
