import { ReactNode } from "react";

interface PropsType {
  children: ReactNode;
}

const Container = ({ children }: PropsType) => {
  return <div className="flex flex-col gap-[20px]">{children}</div>;
};

export default Container;
