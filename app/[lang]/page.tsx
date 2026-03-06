import HomeClient from "@/components/HomeClient";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/JsonLd";

export default function LangHomePage() {
  return (
    <>
      <OrganizationJsonLd />
      <WebSiteJsonLd />
      <HomeClient />
    </>
  );
}