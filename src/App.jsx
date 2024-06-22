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
      <CONTACT/>
      <PAY/>
      <REGISTER/>
      <FOOTER/>
    </div>
  );

}

export default App;
