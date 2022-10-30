import { useCallback, useEffect, useRef } from "react";

const useInfinityScroll = (isLoading, isEndData, handleNextPage) => {
  const obsRef = useRef(null);

  const handlerObs = useCallback(
    (entries) => {
      const target = entries[0];

      if (!isLoading && !isEndData && target.isIntersecting) {
        handleNextPage((prev) => ++prev);
      }
    },
    [isLoading, isEndData, handleNextPage],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handlerObs, { threshold: 0.5 });
    if (obsRef.current) observer.observe(obsRef.current);

    return () => {
      observer.disconnect();
    };
  }, [obsRef, handlerObs]);

  return { obsRef };
};

export default useInfinityScroll;
