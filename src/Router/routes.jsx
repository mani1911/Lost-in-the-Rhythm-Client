import { DancePage, Login } from "../Pages";
import { Search } from "../Pages";

export const routes = [
  {
    title: "Login",
    path: "/",
    description: "Login Page",
    element: <Login />,
  },
  {
    title: "Search",
    path: "/Search",
    description: "Search Page",
    element: <Search />,
  },
  {
    title: "Dance Page",
    path: "/Dance",
    description: "Dance Page",
    element: <DancePage />,
  },
];
