import { useState, useEffect } from "react";

const usePageLoad = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      const images = document.getElementsByTagName("img");
      const imagePromises = Array.from(images).map((img) => {
        if (img.complete) return Promise.resolve();
        return new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve;
        });
      });

      Promise.all(imagePromises).then(() => {
        setLoading(false);
      });
    };

    // Check if document is already loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return loading;
};

export default usePageLoad;
