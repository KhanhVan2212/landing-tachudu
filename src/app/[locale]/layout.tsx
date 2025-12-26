import AppProvider from "../provider";
import { NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import FloatingContact from "@/components/Layout/FloatingContact";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

import { getCompanyInfo } from "@/utils/getCompanyInfo";

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const companyInfo = await getCompanyInfo();

  return (
    <NextIntlClientProvider locale={locale}>
      <AppProvider>
        <div className="min-h-screen bg-slate-50 selection:bg-orange-100 selection:text-orange-900">
          <Header />
          <main>{children}</main>
          <FloatingContact companyInfo={companyInfo} />
          <Footer />
        </div>
      </AppProvider>
    </NextIntlClientProvider>
  );
}
