import { useEffect, useState } from "react";

export const useOnScreen = ({ ref, threshold, root }) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (ref && ref.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIntersecting(true);
            console.log(entries[0]);
            observer.unobserve(entries[0].target);
          } else setIntersecting(false);
        },
        {
          root: root || null,
          threshold: threshold || 1
        }
      );
      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [ref, threshold]);

  return { isIntersecting };
};
