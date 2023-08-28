import "./App.css";
import { Home } from "./pages/Home";
import { LoginPage } from "./pages/Loginpage";
import { Profile } from "./pages/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRoutes } from "./utils/privateRoutes";
import { PublicRoutes } from "./utils/publicRoute";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route element={<PrivateRoutes />}>
						<Route element={Profile} path="/profile" />
					</Route>
					<Route element={<PublicRoutes />}>
						<Route element={<Home />} path="/" exact />
						<Route element={<LoginPage />} path="/login" exact />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
