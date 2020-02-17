<script>
  import { keyMetadata, keyboardKeys } from 'api.js';

  // create a copy so we can manipulate it
  let keyTracking = keyMetadata;

  function playKey(i) {
    if (keyTracking[i].plays == 1) {
      keyTracking[i].currSrc = keyTracking[i].inTuneSource;
    }

    keyTracking[i].keyAudio.currentTime = 0;
    keyTracking[i].keyAudio.play();
    keyTracking[i].plays++;
  }

  function handleKeydown(e) {
    const keyIndex = keyboardKeys.indexOf(e.key);
    if (keyIndex > -1) {
      playKey(keyIndex);
    }
  }

  function toggleActive() {
    for (const key in keyTracking) {
      keyTracking[key].currSrc = keyTracking[key].inTuneSource;
    }
  }
</script>

<style>
  .piano-wrapper {
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    min-width: 12em;
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
    background-color: #ffffff;
    z-index: 1;
  }

  .black {
    --width: 7%;
    height: 18em;
    background-color: rgb(32, 32, 32);
    color: #ffffff;
    z-index: 2;
    margin-left: calc(var(--width) / -2);
    margin-right: calc(var(--width) / -2);
    text-shadow: 0px -1px 1px rgba(255, 255, 255, 0.5);
  }
</style>

<svelte:window on:keydown="{handleKeydown}" />

<div class="piano-wrapper">
  {#each keyTracking as key, i}
  <div
    data-note="{key.note}"
    class="key {key.type}"
    on:mousedown="{() => playKey(i)}"
  >
    <audio bind:this="{key.keyAudio}" src="{key.currSrc}"></audio>
  </div>
  {/each}
</div>
