import { useEffect, useState } from "react";

const useModalPortal = () => {
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const existingRoot = document.getElementById("modal-root");

    if (!existingRoot) {
      console.error("modal-root가 index.html에 존재X");
    }

    setModalRoot(existingRoot);
  }, []);

  return modalRoot;
};

export default useModalPortal;
