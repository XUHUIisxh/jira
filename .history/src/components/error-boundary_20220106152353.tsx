import React, { Component, PropsWithChildren } from "react";

type FallbackRender = (props: { error: Error | null }) => React.ReactElement;

// TODO 处理错误边界 很牛的思路
// TODO github 第三方库使用的 error-boundary https://github.com/bvaughn/react-error-boundary
class ErrorBoundary extends Component<
  PropsWithChildren<{ fallbackrender: FallbackRender }>,
  { error: Error | null }
> {
  state = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    const { error } = this.state;
    const { fallbackrender, children } = this.props;

    if (error) {
      return fallbackrender({ error });
    }
    return children;
  }
}

export default ErrorBoundary;
