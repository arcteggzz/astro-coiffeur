import { Dispatch, RefObject, SetStateAction, useEffect } from "react";

const useClickOutsideToClose = (
  openCloseHandler: Dispatch<SetStateAction<boolean>>,
  openCloseState: boolean,
  refElement: RefObject<HTMLDivElement>
) => {
  useEffect(() => {
    const handleClick = (e: Event) => {
      if (openCloseState) {
        if (!refElement?.current?.contains(e.target as HTMLDivElement)) {
          openCloseHandler(false);
        }
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [openCloseHandler, openCloseState, refElement]);
};

export default useClickOutsideToClose;
