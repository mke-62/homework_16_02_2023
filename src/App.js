import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Dost from "./pages/Dost";
import Dost2 from "./pages/Dost2";

export default function App() {
  return (
      <div>

        <div className="Logo"><img  src="https://admrzn.ru/tpl/img/logo.png" alt=""/> <h2>Рязань</h2></div>
        <BrowserRouter>
            <div className="menu">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/dost">Памятник Олегу Рязанскому
                        </Link>
                    </li>
                    <li>
                        <Link to="/dost2">Успенский собор
                        </Link>
                    </li>
                </ul>
            </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dost" element={<Dost />} />
              <Route path="/dost2" element={<Dost2 />} />

          </Routes>
        </BrowserRouter>
      </div>
  );
}
