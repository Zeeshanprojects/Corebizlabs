import { useEffect } from "react";

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title;

    // Optional: cleanup when component unmounts
    return () => {
      document.title = "Corebizlabs";
    };
  }, [title]);
};

export default useDocumentTitle;