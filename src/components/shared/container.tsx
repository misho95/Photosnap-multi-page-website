import { ReactNode } from "react";

interface PropsType {
  children: ReactNode;
}

const Container = ({ children }: PropsType) => {
  return <div className="flex flex-col">{children}</div>;
};

export default Container;
