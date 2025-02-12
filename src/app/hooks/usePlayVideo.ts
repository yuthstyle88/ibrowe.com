import { useState, useRef } from "react";

const usePlayVideo = (initialSrc: string) => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const playVideo = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!isPlaying && iframeRef.current) {
      const iframe = iframeRef.current;
      const src = iframe.getAttribute("src");
      if (src) {
        iframe.setAttribute("src", src + "&autoplay=1");
        setIsPlaying(true);
      }
    }
  };

  return { iframeRef, isPlaying, playVideo };
};

export default usePlayVideo;
