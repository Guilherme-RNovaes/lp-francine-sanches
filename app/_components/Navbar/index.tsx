'use client'

import NavigationItems from "./_components/navigation-items";
import Image from "next/image";
import userProps from "@/options/user";
import CalModalButton from "../cal-button";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "60min" });
      cal("ui", { "theme": "light", "cssVarsPerTheme": { "light": { "cal-brand": "#f3f5f0" }, "dark": { "cal-brand": "#000000" } }, "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, [])
  return (
    <div className="w-full fixed top-0 flex justify-center p-2 md:p-5 items-center z-50">
      <div className="w-full bg-background shadow-xl rounded-[10px] flex items-center justify-between gap-32 p-[5px]">
        <Image src={userProps.logoUrl} alt="logo da profissional" width={40} height={40} className="text-2xl" />
        <NavigationItems />
        <CalModalButton
          variant="ghost"
          calLink="gnovaes/60min"
          data-cal-config='{"layout":"month_view","theme":"dark"}'
        >
          Agendar Horário
        </CalModalButton>
      </div>
    </div>
  )
}
