import React, { Component, PropsWithChildren } from "react";

type FallbackRender = (props: { error: Error | null }) => React.ReactElement;

class ErrorBoundary extends Component<
  PropsWithChildren<{ fallbackrender: FallbackRender }>,
  { error: Error | null }
> {
  state = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    return <div></div>;
  }
}

export default ErrorBoundary;
