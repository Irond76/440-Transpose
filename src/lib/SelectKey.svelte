<script>
  import { fade } from "svelte/transition";
  import ParentKeyCard from "./ParentKeyCard.svelte";
  import ChordCards from "./ChordCards.svelte";
  import TransposeUpButton from "../Buttons/TransposeUpButton.svelte";
  import TransposeDownButton from "../Buttons/TransposeDownButton.svelte";
  let key = "";

  const transposeUp = (e) => {
    const keySelector = document.querySelector("select");
    let index = keySelector.selectedIndex;
    let length = keySelector.length;
    index = (index + 1) % length;
    keySelector.selectedIndex = index;
    let value = keySelector.value;
    key = value;
    console.log(value);
    console.log(key);
  };
  const transposeDown = () => {
    const keySelector = document.querySelector("select");
    let index = keySelector.selectedIndex;
    let length = keySelector.length;
    index = (index - 1 + length) % length;
    keySelector.selectedIndex = index;
    let value = keySelector.value;
    key = value;
    console.log(value);
    console.log(key);
  };
</script>

<div transition:fade={{ duration: 1000 }}>
  <select name="parentKey" id="parentKey" bind:value={key}>
    <option value="A">A</option>
    <option value="A#">A#</option>
    <option value="B">B</option>
    <option value="C" selected>C</option>
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
{#if key}
  <div transition:fade={{ duration: 1000 }} class="btn-containers">
    <TransposeUpButton on:click={transposeUp} />
    <ParentKeyCard {key}>
      <h1>{key}</h1>
    </ParentKeyCard>
    <TransposeDownButton on:click={transposeDown} />
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
    .btn-containers {
      position: relative;
    }
  }
</style>
