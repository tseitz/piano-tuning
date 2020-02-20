<script>
  import { createEventDispatcher } from 'svelte';
  let toggled = false;

  const dispatch = createEventDispatcher();

  function toggleTune() {
    toggled = !toggled;
    dispatch('toggled', toggled);
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
    left: 4rem;
    transition: left 0.5s ease-out;
  }

  @keyframes slide {
    0% {
      left: 0px;
    }
    100% {
      left: 4rem;
    }
  }
</style>

<h3>Regular Ass Piano</h3>

<div
  class="h-16 w-32 rounded-full bg-green-300"
  on:click="{() => toggleTune()}"
>
  <div
    class="h-16 w-16 rounded-full bg-green-500 {toggled === true ? 'toggled': 'untoggled'}"
  ></div>
</div>
