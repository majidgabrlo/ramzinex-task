import { Provider } from "react-redux";
import Header from "./components/Header";
import { store } from "./store";
import RTLProvider from "./providers/RTLProvider";

const App = () => {
  return (
    <Provider store={store}>
      <RTLProvider>
        <div className="max-w-5xl mx-auto p-3">
          <Header />
        </div>
      </RTLProvider>
    </Provider>
  );
};

export default App;
