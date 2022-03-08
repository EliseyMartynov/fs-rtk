import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export const withQuery = (component: () => React.ReactNode) => () =>
  (
    <QueryClientProvider client={queryClient} contextSharing>
      {component()}
    </QueryClientProvider>
  );
