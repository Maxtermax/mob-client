import history from "@core/components/History";

export default (_prevResult, isAuthenticated) => {
  const shouldGoToFeed =
    isAuthenticated && window.location.pathname === "/login";
  if (shouldGoToFeed) {
    history.push("/");
  }
};
