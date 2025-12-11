<script lang="ts">
    export let t;
  import ProjectCard from "./ProjectCard.svelte";

  const projects = [
    {
      title: "LoyalTree App",
      description: "Loyaltree is a full-stack, multi-tenant loyalty platform enabling businesses to issue and manage digital rewards via web, mobile, and native apps.",
      image: "/images/HomePageLoyaltree.png",
      link: "https://loyaltree.io",
    },
    {
      title: "Security Monitoring AI",
      description: "Web application designed to identify unusual patterns in data streams.",
      image: "/images/anomaly-alerts.jpg",
      link: "https://github.com/anastasis-mor/Anomaly-Detector-Display",
    },
  ];
</script>

<section class="projects-section">
  <h2 class="title">{t.projects.title}</h2>

  <div class="grid">
    {#each projects as p}
      <ProjectCard {...p} />
    {/each}
  </div>
</section>

<style>
  .projects-section {
    padding: 4rem 2rem;
    background: #0e0e0e;
    color: white;
    text-align: center;
  }

  .title {
    font-size: 2.2rem;
    font-weight: 800;
    margin-bottom: 2.5rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.5rem;
    padding: 1rem 0;
  }
</style>
