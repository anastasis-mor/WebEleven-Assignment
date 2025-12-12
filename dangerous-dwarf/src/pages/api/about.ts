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
      card1Title: t.about.cards.card1Title,
      card1Subtitle: t.about.cards.card1Subtitle,
      card2Title: t.about.cards.card2Title,
      card2Subtitle: t.about.cards.card2Subtitle,
      card3Title: t.about.cards.card3Title,
      card3Subtitle: t.about.cards.card3Subtitle,
    }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}
