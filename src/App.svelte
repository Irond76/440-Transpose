<script>
  import { enterSite } from "./Stores/enterSiteStore";
  import Header from "./lib/Header.svelte";
  import Button from "./Buttons/Button.svelte";
  import SelectKey from "./lib/SelectKey.svelte";
</script>

{#if $enterSite}
  <main class="main-container">
    <Header />
    <Button />
  </main>
{:else}
  <main class="main-container">
    <Header />
    <SelectKey />
  </main>
{/if}
