import { useState, useEffect } from "react";

const useInfiniteScroll = () => {
  const [page, setPage] = useState(1);
  const [ref, setRef] = useState(null);

  const onIntersect = ([entry], observer) => {
    if (entry.isIntersecting) {
      setPage((prev) => prev + 1);
      observer.unobserve(entry.target);
    }
  };

  useEffect(() => {
    let observer;
    if (ref) {
      observer = new IntersectionObserver(onIntersect, { threshold: 0.5 });
      observer.observe(ref);
    }
    return () => observer?.disconnect();
  }, [ref]);

  return { page, setRef };
};

export default useInfiniteScroll;
