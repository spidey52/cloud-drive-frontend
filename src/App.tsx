import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./components/Layout";
import NewFolder from "./components/NewFolder";

type Props = {};

const queryClient = new QueryClient();

const App = (props: Props) => {
 return (
  <QueryClientProvider client={queryClient}>
   <Layout />

   {/* global  modals */}
   <NewFolder />
   {/* end of global modals */}
  </QueryClientProvider>
 );
};

export default App;
