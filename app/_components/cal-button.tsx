import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";

type ButtonVariant = "default" | "ghost" | "outline";

const variants: Record<ButtonVariant, string> = {
  default: "bg-foreground-secondary text-background",
  ghost: "bg-transparent border border-foreground text-foreground hover:bg-accent",
  outline: "border border-foreground text-foreground bg-transparent",
};

interface CalButtonProps {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  calLink: string;
}

export default function CalModalButton({
  children,
  className,
  variant = "default",
  calLink
}: CalButtonProps) {
  return (
    <Link
      href="#"
      className={clsx(
        "cursor-pointer pl-3 px-[5px] py-[5px] rounded-[7px] flex items-center justify-between gap-5 transition-colors",
        variants[variant],
        className
      )}
      data-cal-link={calLink}
    >
      {children}
      <div className="bg-accent rounded-[4px] px-[2px] text-foreground-secondary">
        <ArrowUpRight width={20} />
      </div>
    </Link>
  );
}
