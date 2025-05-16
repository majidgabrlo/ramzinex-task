import { Provider } from "react-redux";
import Header from "./components/Header";
import { store } from "./stores";
import RTLProvider from "./providers/RTLProvider";
import LanguageSelector from "./components/LanguageSelector";

const App = () => {
  return (
    <Provider store={store}>
      <RTLProvider>
        <div className="max-w-5xl mx-auto p-3">
          <Header />
          <div className="mt-2">
            <LanguageSelector />
          </div>
        </div>
      </RTLProvider>
    </Provider>
  );
};

export default App;
