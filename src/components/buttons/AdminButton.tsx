"use client";

// Components
import { useRouter } from "next/navigation";

// shadcn/ui
import { Button } from "../ui/Button";

// Class name merger
import { cn } from "@/lib/utils";

// Datatypes
import { ReactNode } from "react";

interface AdminButtonProps {
  children?: ReactNode;
  className?: string;
  text: string;
  icon: ReactNode;
  destination: string;
}

const AdminButton: React.FC<AdminButtonProps> = ({
  children,
  className,
  text,
  icon,
  destination,
}) => {
  const router = useRouter();

  return (
    <Button
      className={cn(
        "w-full row-container justify-start gap-2 rounded-none text-primary bg-primary-foreground hover:bg-secondary hover:text-white duration-300",
        className
      )}
      onClick={() => router.push(destination)}
    >
      {icon}
      <p>{text}</p>
      {children}
    </Button>
  );
};

export default AdminButton;
