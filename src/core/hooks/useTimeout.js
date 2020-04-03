import { useState } from "react";

export default function useTimeout(time = null) {
  const [loading, setLoading] = useState(true);
  return new Promise(resolve => {
    setTimeout(() => {
      setLoading(false);
      return resolve(loading);
    }, time);
  });
}
