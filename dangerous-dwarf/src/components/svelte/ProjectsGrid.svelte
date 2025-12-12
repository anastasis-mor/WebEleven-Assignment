<script lang="ts">
    export let t;
  import ProjectCard from "./ProjectCard.svelte";

 const projects = (t.projects.items as any[]).map((item: any, i: number) => ({
  title: item.title,
  description: item.description,
  image: i === 0 ? "/images/HomePageLoyaltree.png" : "/images/anomaly-alerts.jpg",
  link: i === 0 ? "https://loyaltree.io" : "https://github.com/anastasis-mor/Anomaly-Detector-Display"
}));
</script>

<section
  id="projects"
  class="py-20 px-4 bg-neutral-950 text-white text-center"
>
  <h2 class="text-3xl font-extrabold mb-10">
    {t.projects.title}
  </h2>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each projects as p}
      <ProjectCard {...p} />
    {/each}
  </div>
</section>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.5rem;
    padding: 1rem 0;
  }
</style>
