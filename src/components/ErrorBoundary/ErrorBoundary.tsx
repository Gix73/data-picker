import React, { type ErrorInfo, type ReactNode } from "react";
import { ErrorHeader, ErrorWrapper } from "./styled";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log(error, errorInfo);
  }

  render(): ReactNode {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <ErrorWrapper>
          <ErrorHeader>
            There is an Error. Please, check settings and refresh this page.
          </ErrorHeader>
        </ErrorWrapper>
      );
    }
    return children;
  }
}

export default ErrorBoundary;
