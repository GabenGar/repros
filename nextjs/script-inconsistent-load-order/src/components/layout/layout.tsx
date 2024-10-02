import { ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

export function Layout({ children }: IProps) {
  return children;
}
