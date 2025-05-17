import { useEffect, useRef, useState, type ReactNode } from "react";

interface InfiniteScrollListProps<T> {
  data: T[];
  batchSize?: number;
  renderItem: (item: T, index: number) => ReactNode;
}

function InfiniteScrollList<T>({
  data,
  renderItem,
  batchSize = 20,
}: InfiniteScrollListProps<T>) {
  const [visibleCount, setVisibleCount] = useState(batchSize);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting && visibleCount < data?.length) {
      setVisibleCount((prev) => Math.min(prev + batchSize, data?.length));
    }
  };

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [visibleCount, data]);

  return (
    <>
      {data?.slice(0, visibleCount).map(renderItem)}
      <div ref={loaderRef} />
    </>
  );
}

export default InfiniteScrollList;
