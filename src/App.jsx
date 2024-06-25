import { BrowserRouter, Routes, Route } from "react-router-dom";

import HEADER from "./pages/header/page";
import MAIN from "./pages/main/page";
import ABOUT from "./pages/about/page";
import CONTACT from "./pages/contact/page";
import PAY from "./pages/pay/page";
import REGISTER from "./pages/register/page";
import FOOTER from "./pages/footer/page";

const App = () => {

  return (
    <div className="App">
      <HEADER/>
        <Routes>
          <Route index element={<MAIN/>} />
          <Route path="/home" element={<MAIN/>} />
          <Route path="/about" element={<ABOUT/>} />
          <Route path="/contact" element={<CONTACT/>} />
          <Route path="/pay" element={<PAY/>} />
          <Route path="/register" element={<REGISTER/>} />
        </Routes>
      <FOOTER/>
    </div>
  );

}

export default App;
