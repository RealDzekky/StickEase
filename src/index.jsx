import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import App from "./App";
import About from "./routes/About";
import "tailwindcss/tailwind.css";
import "./index.css";
import About from "./routes/About";

render(
    () => (
      <Router root={App}>
        <Route path='/' component={App} />
        <Route path="/about" component={About} />
      </Router>
    ),
    document.getElementById("root")
  );