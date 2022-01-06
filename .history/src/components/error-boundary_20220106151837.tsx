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
    const { error } = this.state;
    const { fallbackrender, children } = this.props;

    if (error) {
      return fallbackrender({ error });
    }
    return children;
  }
}

export default ErrorBoundary;
