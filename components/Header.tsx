"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { Coins, Globe2 } from "lucide-react";
import { useTranslations } from "next-intl";

type Language = "en" | "ur" | "ar";
type Currency = "USD" | "PKR" | "AED";

export function TopBar() {
  const t = useTranslations("header");
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value as Language;
    
    // Extract the current path without the locale
    const pathWithoutLocale = pathname.replace(/^\/(en|ur|ar)/, '');
    
    // Redirect to the new locale with the same path
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  const handleCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newCurrency = event.target.value as Currency;
    // Currency change logic can be implemented here
    console.log("Currency changed to:", newCurrency);
  };

  return (
    <div className="top-bar hidden md:flex">
      <div className="social-icons-top flex">
        <a
          href="https://www.facebook.com/FastJobCareer/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f" />
        </a>
        <a
          href="https://x.com/fastjobcareer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-x-twitter" />
        </a>
        <a
          href="https://www.linkedin.com/company/fastjobcareer/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in" />
        </a>
        <a
          href="https://www.tiktok.com/@fastjobcareer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-tiktok" />
        </a>
      </div>
      <div className="flex items-center justify-center gap-3 text-[11px]">
        <span className="inline-flex items-center gap-1 rounded-full bg-[#0b1f3f] px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber-300">
          <Globe2 className="h-3 w-3" />
          <select
            defaultValue="en"
            onChange={handleLanguageChange}
            className="bg-transparent text-amber-300 outline-none cursor-pointer"
          >
            <option value="en">EN</option>
            <option value="ur">UR</option>
            <option value="ar">AR</option>
          </select>
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-[#0b1f3f] px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber-300">
          <Coins className="h-3 w-3" />
          <select
            defaultValue="PKR"
            className="bg-transparent text-amber-300 outline-none"
          >
            <option value="PKR">PKR</option>
            <option value="USD">USD</option>
            <option value="SAR">SAR</option>
            <option value="AED">AED</option>
          </select>
        </span>
      </div>
      <div className="auth-btns flex items-center gap-4">
        <Link href="/dashboard" className="px-3 py-1 rounded-md bg-amber-400 text-[#0a2351] font-semibold text-sm hover:bg-amber-300 transition-colors">
          {t("dashboard")}
        </Link>
        <Link href="/auth/register" className="px-3 py-1 rounded-md bg-green-500 text-white font-semibold text-sm hover:bg-green-600 transition-colors">
          {t("register")}
        </Link>
      </div>
    </div>
  );
}

export default function Header() {
  const t = useTranslations("header");
  return (
    <>
      <header className="flex w-full flex-nowrap items-center justify-between px-4">
        <Link href="/" className="brand-text-only">
          <span className="text-base sm:text-lg md:text-xl">
            Fast Job <span>Career</span>
          </span>
        </Link>
        <nav className="nav-pages flex flex-nowrap items-center gap-4 overflow-x-auto whitespace-nowrap md:gap-6">
          <Link href="/" className="px-1 py-2 text-sm md:text-base">{t("home")}</Link>
          <Link href="/find-jobs" className="px-1 py-2 text-sm md:text-base">{t("jobs")}</Link>
          <Link href="/travel" className="px-1 py-2 text-sm md:text-base">{t("travel")}</Link>
          <Link href="/resource-hub" className="px-1 py-2 text-sm md:text-base">{t("resourceHub")}</Link>
          <Link href="/categories" className="px-1 py-2 text-sm md:text-base">{t("categories")}</Link>
          <Link href="/sections" className="px-1 py-2 text-sm md:text-base">{t("sections")}</Link>
          <Link href="/partner" className="px-1 py-2 text-sm md:text-base">{t("partners")}</Link>
          <Link href="/about" className="px-1 py-2 text-sm md:text-base">{t("about")}</Link>
          <Link href="/contact" className="px-1 py-2 text-sm md:text-base">{t("contact")}</Link>
        </nav>
      </header>
    </>
  );
}
