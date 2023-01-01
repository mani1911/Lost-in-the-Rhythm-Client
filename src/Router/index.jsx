import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "../Pages/PageNotFound";
import {routes} from "./routes";
import Navbar from "../Components/Navbar";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				{routes.map((route) => {
					return (
						<Route
							key={route.path}
							path={route.path}
							element={route.element}
						/>
					);
				})}
				<Route path="*" element={<PageNotFound />} />
			</Routes>
			<Navbar/>
		</BrowserRouter>
	);
};

export default Router;
