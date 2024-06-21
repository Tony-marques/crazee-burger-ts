import { useState } from "react";

export const useSuccessMessage = () => {
  const [isMessageSuccess, setIsMessageSuccess] = useState(false);

  const displaySuccessMessage = () => {
    setIsMessageSuccess(true);

    setTimeout(() => {
      setIsMessageSuccess(false);
    }, 2000);
  };

  return {
    isMessageSuccess,
    displaySuccessMessage,
  };
};
