<script>
  import { fade } from "svelte/transition";
  import ParentKeyCard from "./ParentKeyCard.svelte";
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
{/if}

<style>
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
</style>
