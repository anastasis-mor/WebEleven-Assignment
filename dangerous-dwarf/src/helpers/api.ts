export async function fetchAbout(
  lang: string,
  astroUrl: URL
) {
  const res = await fetch(
    new URL(`/api/about?lang=${lang}`, astroUrl)
  );

  if (!res.ok) {
    throw new Error("Failed to fetch about data");
  }

  return res.json();
}
