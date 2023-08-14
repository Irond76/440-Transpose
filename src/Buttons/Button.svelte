<script>
  import { enterSite } from "../Stores/enterSiteStore.js";

  const toggleEnterSite = () => {
    enterSite.update((current) => {
      return !current;
    });
  };
</script>

<div class="Enter-Btn-Container">
  <button type="button" class="btn" on:click={toggleEnterSite}>Enter</button>
</div>

<style>
  .btn {
    background-color: transparent;
    border: 1px solid #e30074;
    border-radius: 0.3em;
    color: #e30074;
    cursor: pointer;
    font-size: 1.2em;
    padding: 0.5em;
  }
  .btn:hover {
    border: 1px solid #f17fb9;
    color: #f17fb9;
  }
</style>
