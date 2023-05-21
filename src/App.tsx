import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./components/Layout";
import NewFolder from "./components/NewFolder";
import ImageModal from "./components/ImageModal";
import EditorModal from "./components/EditorModal";

type Props = {};

const queryClient = new QueryClient();

const App = (props: Props) => {
 return (
  <QueryClientProvider client={queryClient}>
   <Layout />

   {/* global  modals */}
   <NewFolder />
   <ImageModal />
   <EditorModal />
   {/* end of global modals */}
  </QueryClientProvider>
 );
};

export default App;
