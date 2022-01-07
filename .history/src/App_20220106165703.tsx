import { AuthenticatedApp } from "authenticated-app";
import ErrorBoundary from "components/error-boundary";
import { FullPageErrorFallback } from "components/lib";
import { useAuth } from "context/auth-context";
import { UnauthenticatedApp } from "unauthenticated-app";
import "./App.less";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      <ErrorBoundary fallbackrender={FullPageErrorFallback}>
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </ErrorBoundary>
    </div>
  );
}

export default App;
