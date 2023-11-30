import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface PropsType {
  children: ReactNode;
}

const Container = ({ children }: PropsType) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return <div className="flex flex-col gap-[110px]">{children}</div>;
};

export default Container;
