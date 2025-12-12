<script lang="ts">
  export let t;
  let name = "";
  let email = "";
  let message = "";

  function submitForm() {
    alert("Thanks for reaching out, I'll get back to you soon.");
  }
</script>

<section
  id="contact"
  class="py-20 px-4 bg-neutral-900 text-white text-center"
>
  <h2 class="text-3xl font-extrabold mb-8">
    {t.contact.title}
  </h2>

  <form
    class="max-w-md mx-auto flex flex-col gap-6"
    on:submit|preventDefault={submitForm}
  >
    <div class="flex flex-col text-left">
      <label class="mb-1 text-white/80">{t.contact.name}</label>
      <input
        class="px-4 py-3 rounded-md bg-neutral-800 border border-neutral-700 focus:border-blue-500 outline-none"
        type="text"
        bind:value={name}
        placeholder={t.placeholders.name}
      />
    </div>

    <div class="flex flex-col text-left">
      <label class="mb-1 text-white/80">{t.contact.email}</label>
      <input
        class="px-4 py-3 rounded-md bg-neutral-800 border border-neutral-700 focus:border-blue-500 outline-none"
        type="email"
        bind:value={email}
        placeholder={t.placeholders.email}
      />
    </div>

    <div class="flex flex-col text-left">
      <label class="mb-1 text-white/80">{t.contact.message}</label>
      <textarea
        class="px-4 py-3 rounded-md bg-neutral-800 border border-neutral-700 focus:border-blue-500 outline-none min-h-[120px]"
        bind:value={message}
        placeholder={t.placeholders.message}
      />
    </div>

    <button
      type="submit"
      class="mt-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-md transition"
    >
      {t.contact.send}
    </button>
  </form>
</section>
