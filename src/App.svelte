<script>
  import { enterSite } from "./Stores/enterSiteStore";
  import { scale, fade } from "svelte/transition";
  import Header from "./lib/Header.svelte";
  import Button from "./Buttons/Button.svelte";
</script>

{#if $enterSite}
  <main class="main-container">
    <Header />
    <Button />
  </main>
{:else}
  <main class="main-container">
    <Header />
    <div class="key-card-container" transition:fade={{ duration: 500 }}>
      <div>
        <h1>Content Goes Here</h1>
      </div>
    </div>
  </main>
{/if}
