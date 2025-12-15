<script lang="ts">
  export let t;
  import ProjectCard from "./ProjectCard.svelte";
  import { inview } from "svelte-inview";

const images = [
  "/images/HomePageLoyaltree.png",
  "/images/anomaly-alerts.jpg"
];

const links = [
  "https://loyaltree.io",
  "https://github.com/anastasis-mor/Anomaly-Detector-Display"
];

const projects = t.projects.items.map((item: any, i:any) => ({
  ...item,
  image: images[i],
  link: links[i]
}));

  let visible = false;
</script>

<section
  id="projects"
  use:inview={{threshold: 0.2 }}
  on:inview_enter={() => {
  if (!visible) visible = true;
  }}
  class={`py-20 px-4 bg-neutral-950 text-white text-center transition-all duration-700
    ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
>
  <h2 class="text-3xl font-extrabold mb-10">
    {t.projects.title}
  </h2>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6 py-4">
  {#each projects as p, i}
    <ProjectCard {...p} index={i} />
  {/each}
</div>
</section>

