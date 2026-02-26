"use client";

import Script from "next/script";
import { useId } from "react";

const CAREERJET_BASE_URL = "https://widget.careerjet.net/job-box/c3ffb13383f3be84914b534e0628fa3f";

interface CareerjetWidgetProps {
  /** Location for job search (e.g. USA, United Kingdom, UAE, Pakistan) */
  dataLocation: string;
  /** Optional search keyword */
  dataSearch?: string;
}

export default function CareerjetWidget({
  dataLocation,
  dataSearch = "",
}: CareerjetWidgetProps) {
  const id = useId().replace(/:/g, "-");

  return (
    <div className="careerjet-widget-container" key={`${dataLocation}-${dataSearch}`}>
      <div
        id={id}
        className="cj-job-box"
        data-url={CAREERJET_BASE_URL}
        data-search={dataSearch}
        data-location={dataLocation}
      />
      <Script
        key={dataLocation}
        id={`careerjet-widget-${id}`}
        src="https://static.careerjet.org/js/all_widget_job_box_3rd_party.min.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
