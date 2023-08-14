<script>
  import { fade, scale } from "svelte/transition";
  import { chordNumbers } from "../Stores/chordLibraryStore";
  import { modeNames } from "../Stores/chordLibraryStore";
  import { chordStore } from "../Stores/chordLibraryStore";
  export let key;

  const aChords = $chordStore[0].chords.map((item) => {
    return item;
  });
  const asharpChords = $chordStore[1].chords.map((item) => {
    return item;
  });
  const bChords = $chordStore[2].chords.map((item) => {
    return item;
  });
  const cChords = $chordStore[3].chords.map((item) => {
    return item;
  });
  const cSharpChords = $chordStore[4].chords.map((item) => {
    return item;
  });
  const dChords = $chordStore[5].chords.map((item) => {
    return item;
  });
  const dSharpChords = $chordStore[6].chords.map((item) => {
    return item;
  });
  const eChords = $chordStore[7].chords.map((item) => {
    return item;
  });
  const fChords = $chordStore[8].chords.map((item) => {
    return item;
  });
  const fSharpChords = $chordStore[9].chords.map((item) => {
    return item;
  });
  const gChords = $chordStore[10].chords.map((item) => {
    return item;
  });
  const gSharpChords = $chordStore[11].chords.map((item) => {
    return item;
  });
</script>

{#if $chordNumbers}
  {#each $chordNumbers as number}
    <div class="chord-numbers" transition:fade={{ duration: 1000 }}>
      <h2>{number}</h2>
    </div>
  {/each}
  {#if key === "A"}
    {#each aChords as chord}
      <div class="chord-numbers chord-names">
        <h2>{chord}</h2>
      </div>
    {/each}
  {/if}
  {#if key === "A#"}
    {#each asharpChords as chord}
      <div class="chord-numbers chord-names">
        <h2>{chord}</h2>
      </div>
    {/each}
  {/if}
  {#if key === "B"}
    {#each bChords as chord}
      <div class="chord-numbers chord-names">
        <h2>{chord}</h2>
      </div>
    {/each}
  {/if}
  {#if key === "C"}
    {#each cChords as chord}
      <div class="chord-numbers chord-names">
        <h2>{chord}</h2>
      </div>
    {/each}
  {/if}
  {#if key === "C#"}
    {#each cSharpChords as chord}
      <div class="chord-numbers chord-names">
        <h2>{chord}</h2>
      </div>
    {/each}
  {/if}
  {#if key === "D"}
    {#each dChords as chord}
      <div class="chord-numbers chord-names">
        <h2>{chord}</h2>
      </div>
    {/each}
  {/if}
  {#if key === "D#"}
    {#each dSharpChords as chord}
      <div class="chord-numbers chord-names">
        <h2>{chord}</h2>
      </div>
    {/each}
  {/if}
  {#if key === "E"}
    {#each eChords as chord}
      <div class="chord-numbers chord-names">
        <h2>{chord}</h2>
      </div>
    {/each}
  {/if}
  {#if key === "F"}
    {#each fChords as chord}
      <div class="chord-numbers chord-names">
        <h2>{chord}</h2>
      </div>
    {/each}
  {/if}
  {#if key === "F#"}
    {#each fSharpChords as chord}
      <div class="chord-numbers chord-names">
        <h2>{chord}</h2>
      </div>
    {/each}
  {/if}
  {#if key === "G"}
    {#each gChords as chord}
      <div class="chord-numbers chord-names">
        <h2>{chord}</h2>
      </div>
    {/each}
  {/if}
  {#if key === "G#"}
    {#each gSharpChords as chord}
      <div class="chord-numbers chord-names">
        <h2>{chord}</h2>
      </div>
    {/each}
  {/if}

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
    color: #e30074;
  }
  .chord-names {
    border: none;
    background-color: rgba(227, 0, 116, 0.5);
    color: #fff;
  }

  @media screen and (max-width: 500px) {
    .chord-numbers {
      padding: 0;
      font-size: 0.5em;
    }
  }
</style>
