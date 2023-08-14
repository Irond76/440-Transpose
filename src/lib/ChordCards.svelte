<script>
  import { fade } from "svelte/transition";
  import { chordNumbers } from "../Stores/chordLibraryStore";
  import { modeNames } from "../Stores/chordLibraryStore";
</script>

{#if $chordNumbers}
  {#each $chordNumbers as number}
    <div class="chord-numbers" transition:fade={{ duration: 1000 }}>
      <h2>{number}</h2>
    </div>
  {/each}
  {#each $modeNames as names}
    <div class="chord-numbers" transition:fade={{ duration: 1000 }}>
      <h2>{names}</h2>
    </div>
  {/each}
{/if}

<style>
  .chord-numbers {
    border: 1px solid #e30074;
    padding: 1em;
  }

  @media screen and (max-width: 500px) {
    .chord-numbers {
      padding: 0;
      font-size: 0.5em;
    }
  }
</style>
