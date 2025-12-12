<script lang="ts">
  export let title: string;
  export let description: string;
  export let image: string;
  export let link: string;
</script>

<div class="card" on:click={() => window.open(link, "_blank")}>
  <img src={image} alt={title} class="thumbnail" loading="lazy" />

  <div class="content">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
</div>

<style>
  .card {
    background: #1b1b1b;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    display: flex;
    flex-direction: column;
  }

  .card:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.4);
  }

  .thumbnail {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }

  .content {
    padding: 1rem;
  }

  h3 {
    margin: 0 0 .5rem 0;
  }

  p {
    opacity: 0.8;
    font-size: .95rem;
  }
</style>
