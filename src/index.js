import React from "react";
import ReactDOM from "react-dom/client";
import { QUESTIONS } from "./components/DB";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App QUESTIONS={QUESTIONS} />
	</React.StrictMode>
);
