<script>
  import { enterSite } from "./Stores/enterSiteStore";
  import Header from "./lib/Header.svelte";
  import Button from "./Buttons/Button.svelte";
</script>

{#if $enterSite}
  <main class="main-container">
    <div class="header-container">
      <Header />
    </div>
    <div class="Enter-Btn-Container">
      <Button />
    </div>
    <!-- <div class="key-card-container">
    <div>
      <button>click me</button>
    </div>
  </div> -->
  </main>
{:else}
  <main class="main-container">
    <div class="header-container">
      <Header />
    </div>
    <div class="key-card-container">
      <div>
        <button>click me</button>
      </div>
    </div>
  </main>
{/if}
