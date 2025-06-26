'use client'

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

type ButtonVariant = "default" | "ghost" | "outline";

const variants: Record<ButtonVariant, string> = {
  default: "bg-foreground text-background group",
  ghost: "bg-transparent border border-foreground text-foreground group",
  outline: "border border-foreground text-foreground bg-transparent group",
};

interface CalButtonProps {
  children?: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  calLink?: string;
}

function CalModalButton({
  children,
  className,
  variant = "default",
  calLink
}: CalButtonProps) {
  return (
    <Link
      href="#"
      className={clsx(
        "cursor-pointer w-fit pl-3 px-[5px] py-[5px] rounded-[7px] flex items-center justify-between gap-6 transition-all duration-300",
        variants[variant],
        className
      )}
      data-cal-link={calLink}
    >
      {children}
      <div className="bg-accent rounded-[4px] px-[2px] text-foreground-secondary group-hover:text-transparent group-hover:rotate-90 group-hover:scale-[30%] transition-all duration-300">
        <ArrowUpRight width={20} />
      </div>
    </Link>
  );
}

export default function BookingButton({
  className,
  variant = "default",
}: CalButtonProps) {
  useEffect(() => {
    (async function() {
      const cal = await getCalApi({ "namespace": "60min" });
      cal("ui", { "theme": "light", "cssVarsPerTheme": { "light": { "cal-brand": "#f3f5f0" }, "dark": { "cal-brand": "#08080f" } }, "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, [])
  return (
    <CalModalButton
      variant={variant}
      className={className}
      calLink="gnovaes/60min"
      data-cal-config='{"layout":"month_view","theme":"dark"}'
    >
      <p className="group-hover:translate-x-4 transition-transform duration-300">
        Agendar Horário
      </p>
    </CalModalButton>
  )
}
