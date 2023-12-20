import {ReactNode} from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  spaceY?: boolean;
};

const Container = ({children, className, spaceY = true}: ContainerProps) => {
  return (
    <div
      className={`container mx-auto px-4 overflow-hidden ${
        spaceY ? "py-8 lg:py-16" : ""
      } ${className || ""}`}>
      {children}
    </div>
  );
};

export default Container;
