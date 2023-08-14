<script>
  import { fade } from "svelte/transition";
  import ParentKeyCard from "./ParentKeyCard.svelte";
  import ChordCards from "./ChordCards.svelte";
  let key = "";
  $: parentKey = key;
</script>

<div transition:fade={{ duration: 1000 }}>
  <select name="parentKey" id="parentKey" bind:value={key}>
    <option value="A">A</option>
    <option value="A#">A#</option>
    <option value="B">B</option>
    <option value="C">C</option>
    <option value="C#">C#</option>
    <option value="D">D</option>
    <option value="D#">D#</option>
    <option value="E">E</option>
    <option value="F">F</option>
    <option value="F#">F#</option>
    <option value="G">G</option>
    <option value="G#">G#</option>
  </select>
  <label for="parentKey">Select Parent Key</label>
</div>
{#if parentKey}
  <div transition:fade={{ duration: 1000 }}>
    <ParentKeyCard>
      <h1>{key}</h1>
    </ParentKeyCard>
  </div>
  <div class="chord-number-container">
    <ChordCards {key} />
  </div>
{/if}

<style>
  .chord-number-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 0.5em;
    text-align: center;
    width: 80dvw;
  }
  div {
    padding: 2em;
  }
  label {
    margin-left: 1em;
    color: #e30074;
    font-size: 1.2em;
  }

  select {
    /* border: 1px solid #e30074; */
    border: none;
    background-color: transparent;
    color: #e30074;
    font-size: 1.2em;
    padding: 0.3em;
  }

  @media screen and (max-width: 500px) {
    .chord-number-container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      gap: 0.5em;
      margin: 0 auto;
      text-align: center;
      width: 100dvw;
    }
  }
</style>
