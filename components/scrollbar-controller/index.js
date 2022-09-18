import { useEffect } from "react";

export function ScrollbarController() {
  useEffect(() => {
    function updateScrollbar() {
        const scrollbarWidth = window.innerWidth - document.body.clientWidth;
        document.documentElement.style.setProperty(
          "--scrollbarWidth",
          `${scrollbarWidth}px`
        );
    }

    window.addEventListener('resize', updateScrollbar);
    window.addEventListener('load', updateScrollbar);
   

    return () => {
        window.removeEventListener('resize', updateScrollbar);
        window.removeEventListener('load', updateScrollbar);
    };
  }, []);

  return null;
}
