import { useEffect } from "react";
export default function useIntersection(selector, callback, dependencies) {
  useEffect(() => {
    const items = document.querySelectorAll(selector);
    items.forEach(root => {
      if (!root) return;
      if (root.observer) root.observer.unobserve(root);
      var options = {
        rootMargin: "0px 0px 0px 0px",
        threshold: 0.5
      };
      const observer = new IntersectionObserver(callback, options);
      root.observer = observer;
      observer.observe(root);
    });
  }, [dependencies, callback, selector]);
}
