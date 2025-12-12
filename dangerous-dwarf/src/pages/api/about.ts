export const prerender = false;

import el from "../../locales/el.json";
import en from "../../locales/en.json";

export async function GET({ request }: { request: Request }) {
  const url = new URL(request.url);

  const rawLang = url.searchParams.get("lang") || "en";
  const lang = rawLang.toLowerCase().split("-")[0].trim();

  const t = lang === "el" ? el : en;

  return new Response(
    JSON.stringify({
      title: t.about.title,
      description: t.about.description,
      goalsTitle: t.about.goalsTitle,
      goalsDescription: t.about.goalsDescription,
      interviewTitle: t.about.interviewTitle,
      interviewDescription: t.about.interviewDescription,
    }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}
