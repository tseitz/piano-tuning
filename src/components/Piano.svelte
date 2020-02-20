<script>
  import Toggle from "./ui/Toggle.svelte";
  import { keyMetadata, keyboardKeys } from 'api.js';

  // create a copy so we can manipulate it
  let keyTracking = keyMetadata;
  let toggled = false;
  let activeKey = -1;

  function playKey(key, i) {
    activeKey = -1;
    key.keyAudio.currentTime = 0;
    
    activeKey = i;
    key.keyAudio.play().then(() => {
      setTimeout(() => {
        activeKey = -1;
      }, 1000);
    });
  }

  function handleKeydown(e) {
    const keyIndex = keyboardKeys.indexOf(e.key);

    if (keyIndex > -1) {
      playKey(keyTracking[keyIndex], keyIndex);
    }
  }

  function toggleActive(event) {
    toggled = event.detail;

    keyTracking.map((key) => {
      key.keyAudio.src = toggled ? key.inTuneSource : key.outtaTuneSource;
    });
  }
</script>

<style>
  .piano-wrapper {
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    min-width: 12em;
    margin: 0 -2em; /* offset body padding */
  }

  .key {
    width: var(--width);
    border: 1px solid rgba(32, 32, 32, 0.2);
    border-radius: 0px 0px 5px 5px;
    cursor: pointer;
    box-shadow: 0px 5px 1px rgba(32, 32, 32, 0.2);
  }

  .white {
    --width: 14.28%;
    height: 28em;
    z-index: 1;
  }

  .black {
    --width: 7%;
    height: 18em;
    color: #ffffff;
    z-index: 2;
    margin-left: calc(var(--width) / -2);
    margin-right: calc(var(--width) / -2);
    text-shadow: 0px -1px 1px rgba(255, 255, 255, 0.5);
  }
</style>

<svelte:window on:keydown={handleKeydown} />

<div class="piano-wrapper">
  {#each keyTracking as key, i}
    {#if key.color == 'white'}
      <div
        class="key white {activeKey == i ? 'bg-gray-300' : 'bg-white'}"
        data-note={key.note}
        on:mousedown="{(e) => playKey(key, i)}"
      >
        <audio bind:this={key.keyAudio} src={key.outtaTuneSource}></audio>
      </div>
    {:else}
      <div
        class="key black {activeKey == i ? 'bg-black' : 'bg-gray-800'}"
        data-note={key.note}
        on:mousedown="{(e) => playKey(key, i)}"
      >
        <audio bind:this={key.keyAudio} src={key.outtaTuneSource}></audio>
      </div>
    {/if}
  {/each}
</div>

<div class="flex flex-col items-center">
  {#if !toggled}
    <p>Before Jordan</p>
  {:else}
    <p>After Jordan</p>
  {/if}
  <Toggle on:toggled={toggleActive} toggled/>
</div>