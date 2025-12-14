<script lang="ts">
  import { inview } from "svelte-inview";

  export let title: string;
  export let description: string;
  export let image: string;
  export let link: string;
  export let index = 0;

  let visible = false;
</script>

<a
  href={link}
  target="_blank"
  rel="noopener noreferrer"
  use:inview={{ threshold: 0.15 }}
  on:inview_enter={() => (visible = true)}
  style={`transition-delay: ${index * 120}ms`}
  class={`
    block overflow-hidden rounded-xl bg-neutral-800
    transition-all duration-500 ease-out delay-300 will-change-transform
    hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/40
    ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
  `}
>
  <img
    src={image}
    alt={title}
    loading="lazy"
    class="w-full h-40 object-cover"
  />

  <div class="p-4 text-left">
    <h3 class="text-lg font-semibold mb-1">
      {title}
    </h3>

    <p class="text-sm text-white/80">
      {description}
    </p>
  </div>
</a>
