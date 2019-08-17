export const getToken = (key = "Bearer") => {
  const token = sessionStorage.getItem("session_token") || "";
  return token ? `${key} ${token}` : undefined;
};
