<script>
  import { keyMetadata } from 'api.js';

  const KEYS = ['a', 'w', 's', 'e', 'd', 'f', 't', 'g', 'y', 'h', 'u', 'j'];

  function playKey(i) {
    if (keyMetadata[i].plays == 1) {
      keyMetadata[i].currSrc = keyMetadata[i].inTuneSource;
    }

    keyMetadata[i].keyAudio.currentTime = 0;
    keyMetadata[i].keyAudio.play();
    keyMetadata[i].plays++;
  }

  function handleKeydown(e) {
    const keyIndex = KEYS.indexOf(e.key);
    if (keyIndex > -1) {
      playKey(keyIndex);
    }
  }

  function toggleActive() {
    for (const key in keyMetadata) {
      keyMetadata[key].currSrc = keyMetadata[key].inTuneSource;
    }
  }

  toggleActive();
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
  {#each keyMetadata as key, i}
  <div
    data-note="{key.note}"
    class="key {key.type}"
    on:mousedown="{() => playKey(i)}"
  >
    <audio bind:this="{key.keyAudio}" src="{key.currSrc}"></audio>
  </div>
  {/each}
</div>
