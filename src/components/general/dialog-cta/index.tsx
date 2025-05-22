"use client";

import DialogContext from "@/context/dialogContext";
import { useContext, useEffect } from "react";
import Button from "../buttons/btn";

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  clicked?: boolean;
  type?: string;
}

export default function DialogCta({
  className,
  children,
  onClick,
  type,
  clicked,
}: Props) {
  const { isOpen, setIsOpen } = useContext<any>(DialogContext);

  const handleClick = () => {
    if (onClick) onClick();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (clicked) setIsOpen(true);
  }, [clicked, setIsOpen]);

  return (
    <Button className={`dialog-cta ${className}`} onClick={handleClick}>
      {children}
    </Button>
  );
}
