<script lang="ts">
    export let t;
  let name = "";
  let email = "";
  let message = "";

  function submitForm() {
    alert("Thanks for reaching out, I'll get back to you soon.");
  }
</script>

<section class="contact-section" id="contact">
  <h2 class="title">{t.contact.title}</h2>

  <form class="form" on:submit|preventDefault={submitForm}>
    
    <div class="form-group">
      <label for="name">{t.contact.name}</label>
      <input id="name" type="text" bind:value={name} placeholder="Enter your name" />
    </div>

    <div class="form-group">
      <label for="email">{t.contact.email}l</label>
      <input id="email" type="email" bind:value={email} placeholder="Enter your email" />
    </div>

    <div class="form-group">
      <label for="message">{t.contact.message}</label>
      <textarea id="message" bind:value={message} placeholder="Write your message..."></textarea>
    </div>

    <button type="submit" class="cta-button">{t.contact.send}</button>
  </form>
</section>

<style>
  .contact-section {
    padding: 4rem 2rem;
    background: #111;
    color: white;
    text-align: center;
  }

  .title {
    font-size: 2.2rem;
    font-weight: 800;
    margin-bottom: 2rem;
  }

  .form {
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  label {
    font-size: 1rem;
    margin-bottom: 0.4rem;
    opacity: 0.85;
  }

  input, textarea {
    padding: 0.9rem;
    border-radius: 6px;
    border: 1px solid #333;
    background: #1a1a1a;
    color: white;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.2s ease;
  }

  input:focus, textarea:focus {
    border-color: #3b82f6;
  }

  textarea {
    min-height: 120px;
    resize: vertical;
  }

  .cta-button {
    background: #3b82f6;
    color: white;
    border: none;
    padding: 1rem;
    font-size: 1.1rem;
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.2s ease;
  }

  .cta-button:hover {
    background: #2563eb;
  }
</style>
