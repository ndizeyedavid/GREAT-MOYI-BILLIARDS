import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export default function ProgressBar() {
  const location = useLocation();

  NProgress.configure({ showSpinner: false });

  useEffect(() => {
    const handleStart = () => NProgress.start();
    const handleStop = () => NProgress.done();

    document.querySelectorAll("a").forEach((el) => el.addEventListener("click", handleStart)); // i wrote this line myself, not GPT ;)

    handleStop();

    return () => {
      window.removeEventListener("click", handleStart);
    };
  }, [location]);

  return null;
}
