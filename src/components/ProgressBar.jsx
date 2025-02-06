import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export default function ProgressBar() {
  const location = useLocation();

  useEffect(() => {
    NProgress.start(); // Start the progress bar
    setTimeout(() => {
      NProgress.done(); // Complete after a short delay
    }, 500);
  }, [location]);

  return null;
}
