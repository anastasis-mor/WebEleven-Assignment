<script lang="ts">
  import { inview } from "svelte-inview";

  export let about;

  let left = false;
  let center = false;
  let right = false;
</script>

<div class="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

  <div
  use:inview={{ threshold: 0.2 }}
  on:inview_enter={() => (left = true)}
  class={`group relative rounded-3xl border border-white/10
    bg-white/[0.04] p-8 backdrop-blur-xl
    transition-all duration-700 ease-out delay-150
    ${left ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"}`}
>

  <div
    class="absolute inset-0 -z-10 rounded-3xl
           bg-gradient-to-br from-orange-500/10
           via-transparent to-transparent
           opacity-0 group-hover:opacity-100
           transition-opacity duration-300"
  ></div>

  <div class="relative z-10">

    <div
      class="mb-6 flex h-12 w-12 items-center justify-center
             rounded-xl bg-orange-500/10 text-orange-400"
    >
      <svg xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6" fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor" stroke-width="1.8">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
      </svg>
    </div>

    <h3 class="text-xl font-semibold mb-2">
      {about.card1Title}
    </h3>

    <p class="text-l font-semibold mb-2">
      {about.card1Subtitle}
    </p>

    <p class="text-white/80 leading-relaxed">
      {about.description}
    </p>

  </div>
</div>

  <div
  use:inview={{ threshold: 0.2 }}
  on:inview_enter={() => (center = true)}
  class={`group relative rounded-3xl border border-white/10
    bg-white/[0.04] p-8 backdrop-blur-xl
    transition-all duration-700 ease-out delay-300
    ${center ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
>

<div
    class="absolute inset-0 -z-10 rounded-3xl
           bg-gradient-to-br from-purple-500/10
           via-transparent to-transparent
           opacity-0 group-hover:opacity-100
           transition-opacity duration-300"
  ></div>

  <div class="relative z-10">
  <div
    class="mb-6 flex h-12 w-12 items-center justify-center
           rounded-xl bg-purple-500/10 text-purple-400"
  >
    <svg xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6" fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor" stroke-width="1.8">
      <circle cx="12" cy="12" r="8" />
      <path stroke-linecap="round" stroke-linejoin="round"
        d="M12 8v4l3 3" />
    </svg>
  </div>

  <h3 class="text-xl font-semibold mb-2">
    {about.card2Title}
  </h3>

  <p class="text-l font-semibold mb-2">
      {about.card2Subtitle}
    </p>

  <p class="text-white/80 leading-relaxed">
    {about.goalsDescription}
  </p>
  </div>
</div>

  <div
  use:inview={{ threshold: 0.2 }}
  on:inview_enter={() => (right = true)}
  class={`group relative rounded-3xl border border-white/10
    bg-white/[0.04] p-8 backdrop-blur-xl
    transition-all duration-700 ease-out delay-0
    ${right ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"}`}
>

<div
    class="absolute inset-0 -z-10 rounded-3xl
           bg-gradient-to-br from-emerald-500/10
           via-transparent to-transparent
           opacity-0 group-hover:opacity-100
           transition-opacity duration-300"
  ></div>

  <div class="relative z-10">

  <div
    class="mb-6 flex h-12 w-12 items-center justify-center
           rounded-xl bg-emerald-500/10 text-emerald-400"
  >
    <svg xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6" fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor" stroke-width="1.8">
      <path stroke-linecap="round" stroke-linejoin="round"
        d="M8 10h8M8 14h4m-2 6l-4-4H4
           a2 2 0 01-2-2V6
           a2 2 0 012-2h16
           a2 2 0 012 2v8
           a2 2 0 01-2 2h-6l-4 4z" />
    </svg>
  </div>

  <h3 class="text-xl font-semibold mb-2">
    {about.card3Title}
  </h3>

  <p class="text-l font-semibold mb-2">
      {about.card3Subtitle}
    </p>

  <p class="text-white/80 leading-relaxed">
    {about.interviewDescription}
  </p>
  </div>
</div>

</div>
