import { useEffect } from "react";
import services from "@core/services";
import uniqueId from "@core/utils/uniqueId";
import { httpStream } from "./index";
const { registerUser } = services;

export function useSignUser(getTokenSilently, setUserId, user, userId) {
  useEffect(() => {
    async function signOrGetUser() {
      const token = await getTokenSilently();
      httpStream.push({
        id: uniqueId(),
        onResponse(response) {
          if (response.ok) {
            response.json().then((data) => {
              const { id } = data;
              setUserId(id);
            });
          }
        },
        definition: () => {
          const { name = "", email = "" } = user;
          return registerUser({
            token,
            path: "/api/v1/users/create",
            data: { name, email },
          });
        },
      });
    }
    if (!userId) signOrGetUser();
  }, [getTokenSilently, user, userId, setUserId]);
}
