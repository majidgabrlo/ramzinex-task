import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LanguageSelector from "./components/LanguageSelector";
import Detail from "./pages/Detail";
import Homepage from "./pages/Homepage";
import GeneralProvider from "./providers/GeneralProvider";
import { store } from "./stores";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GeneralProvider>
          <div className="max-w-5xl mx-auto p-3 flex flex-col h-full">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/:id" element={<Detail />} />
            </Routes>
            <div className="mt-2">
              <LanguageSelector />
            </div>
          </div>
        </GeneralProvider>
      </BrowserRouter>
    </Provider>
  );
};


export default App;
