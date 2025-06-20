import { useEffect, useState } from "react";
const useMediaQuery = (query: number, status: "max" | "min"): boolean => {
  const mediaStatus: string =
    status === "max" ? `(max-width: ${query}px)` : `(min-width: ${query}px)`;

  const [matches, setMatches] = useState<boolean>(
    () => window.matchMedia(mediaStatus).matches,
  );

  useEffect(() => {
    const mediaQueryList: MediaQueryList = window.matchMedia(mediaStatus);
    const listener = (event: MediaQueryListEvent): void =>
      setMatches(event.matches);
    mediaQueryList.addEventListener("change", listener);
    return () => mediaQueryList.removeEventListener("change", listener);
  }, [query]);
  return matches;
};
export default useMediaQuery;
