<script>
  import { createEventDispatcher } from "svelte";

  let toggled = false;

  const dispatch = createEventDispatcher();

  function toggleTune() {
    toggled = !toggled;
    dispatch("toggled", toggled);
  }
</script>

<style>
  .untoggled {
    position: relative;
    left: 0;
    transition: left 0.5s ease-out;
  }

  .toggled {
    position: relative;
    left: 50%;
    transition: left 0.5s ease-out;
  }

  @keyframes slide {
    0% {
      left: 0px;
    }
    100% {
      left: 50%;
    }
  }
</style>

<div class="h-10 w-20 rounded-full bg-green-300" on:click={() => toggleTune()}>
  <div
    class="h-10 w-10 rounded-full bg-green-500 {toggled === true ? 'toggled' : 'untoggled'}" />
</div>
