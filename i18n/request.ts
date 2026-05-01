import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async (localeReq) => {
  const requestLocale = await localeReq.requestLocale;
  const locale = hasLocale(routing.locales, requestLocale)
    ? requestLocale
    : routing.defaultLocale;
  console.log(requestLocale);
  return {
    locale: locale,
    messages: (
      await import(`../public/locales/landingpage/${locale}.json`, {
        with: { type: "json" },
      })
    ).default,
  };
});
