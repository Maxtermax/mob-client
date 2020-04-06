import { BASE_URL } from "@core/services";

export function registerUser(payload) {
  const { token = "", path = "", data = {} } = payload;
  return window
    .fetch(`${BASE_URL}${path}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      if (res.status !== 200) return Promise.reject(res);
      return res.json();
    });
}
