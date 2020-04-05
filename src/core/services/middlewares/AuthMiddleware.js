import history from "@core/components/History";

export default () => {
  const isAuthenticated = !!window.localStorage.getItem("isAuthenticated");
  console.log({ isAuthenticated });
  if (!isAuthenticated && window.location.pathname !== "/login") {
    history.push("/login");
  }
};
