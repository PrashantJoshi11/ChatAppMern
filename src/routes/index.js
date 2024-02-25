import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import MainLayout from "../layouts/main";
// layouts
import DashboardLayout from "../layouts/dashboard";

// config
import { DEFAULT_PATH } from "../config";
import LoadingScreen from "../components/LoadingScreen";

const Loadable = (Component) => (props) => {
  return (
    <Suspense  fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path:"/auth",
      element:<MainLayout />,
      children:[
        { element: <Navigate to="login" replace />, index: true },
        { path: "login", element: <LoginPage/> },
        { path: "register", element: <RegisterPage/> },
        { path: "forgotPassword", element: <ForgotPass/> },
        { path: "generateNewPassword", element: <GeneratePassword />},
      ]

    },
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
        { path: "app", element: <GeneralApp /> },
        { path: "setting", element: <Setting /> },
        { path: "groupChat", element: <GroupChat /> },
        { path: "call", element: <Call /> },
        { path: "profile", element: <Profile /> },

        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
const LoginPage = Loadable(
  lazy(() => import("../pages/Auth/Login")),
);
const RegisterPage = Loadable(
  lazy(() => import("../pages/Auth/Register")),
);
const ForgotPass = Loadable(
  lazy(() => import("../pages/Auth/ForgotPass")),
);
const GeneratePassword = Loadable(
  lazy(() => import("../pages/Auth/GeneratePassword")),
);

const GeneralApp = Loadable(
  lazy(() => import("../pages/dashboard/GeneralApp")),
);

const Call = Loadable(
  lazy(() => import("../pages/dashboard/Call")),
);

const Setting = Loadable(
  lazy(() => import("../pages/dashboard/Setting")),
);

const Profile = Loadable(
  lazy(() => import("../pages/dashboard/Profile")),
);
const GroupChat = Loadable(
  lazy(() => import("../components/GroupChat/Groupchat")),
);
const Page404 = Loadable(lazy(() => import("../pages/Page404")));
 