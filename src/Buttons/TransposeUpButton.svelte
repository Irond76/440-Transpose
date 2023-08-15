<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  const handleClick = () => {
    dispatch("click");
  };
</script>

<button type="button" class="btn" on:click={handleClick}>Up</button>

<style>
  .btn {
    background-color: transparent;
    border: 1px solid #e30074;
    border-radius: 0.3em;
    color: #e30074;
    cursor: pointer;
    font-size: 2em;
    height: 8vh;
    text-align: center;
    width: 8vw;
    position: absolute;
    top: 8.6em;
    right: 17em;
  }
  .btn:hover {
    border: 1px solid #f17fb9;
    color: #f17fb9;
  }
  @media screen and (max-width: 500px) {
    .btn {
      font-size: 0.7em;
      width: 10dvw;
      height: 6dvh;
      text-align: center;
      top: 4em;
      right: 13em;
    }
  }
</style>
