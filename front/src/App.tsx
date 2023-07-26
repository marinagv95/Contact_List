import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRoutes from "./routes";
import { GlobalStyle } from "./styles/GlobalStyle";
import { UserProvider } from "./providers/userProviders/userContexts";

function App() {
  return (
    <div>
      <GlobalStyle />
      <UserProvider>
        <AppRoutes />
      </UserProvider>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default App;
