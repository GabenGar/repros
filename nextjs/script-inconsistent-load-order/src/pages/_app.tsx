import "../styles/global.scss";
import type { AppProps } from "next/app";
import { Layout } from "#components/layout";
import { ErrorBoundary } from "#components/errors";

function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ErrorBoundary>
  );
}

export default App;
