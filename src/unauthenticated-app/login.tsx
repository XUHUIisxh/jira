import { useAuth } from "context/auth-context";
import React, { FormEvent } from "react";
import { Form, Input, Button } from "antd";

export const LoginScreen = () => {
  const { login, user } = useAuth();

  const handleSubmit = (value: { username: string; password: string }) => {
    login(value);
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item name={"username"}>
        <Input placeholder="用户名" type="text" id="username" />
      </Form.Item>
      <Form.Item name={"password"}>
        <Input placeholder="密码" type="password" id="password" />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary">
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};
