<script lang="typescript">
  import Toggle from "./ui/Toggle.svelte";
  import { keyMetadata, keyboardKeys } from "lib/api";
  import { PianoKeyMetadata } from "models/PianoKeyMetadata";

  let toggled: boolean = false;
  let activeKey: number = -1;

  function playKey(key: PianoKeyMetadata, i: number) {
    key.keyAudio.currentTime = 0;

    activeKey = i;
    key.keyAudio.play();
  }

  function stopKey() {
    activeKey = -1;
  }

  function handleKeydown(e: KeyboardEvent) {
    const keyIndex = keyboardKeys.indexOf(e.key);

    if (keyIndex > -1) {
      playKey(keyMetadata[keyIndex], keyIndex);
    }
  }

  function handleKeyup(e: KeyboardEvent) {
    const keyIndex = keyboardKeys.indexOf(e.key);

    if (keyIndex > -1) {
      stopKey();
    }
  }

  function toggleActive(e: CustomEvent) {
    toggled = e.detail as boolean;

    keyMetadata.map(key => {
      key.keyAudio.src = toggled ? key.inTuneSource : key.outtaTuneSource;
    });
  }
</script>

<style>
  h3 {
    font-size: 2rem;
  }

  .piano-wrapper {
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    min-width: 12em;
    margin: 0 -2em; /* offset body padding for full width */
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

<svelte:window on:keydown={handleKeydown} on:keyup={handleKeyup} />

<div class="piano-wrapper">
  {#each keyMetadata as key, i}
    {#if key.color == 'white'}
      <div
        class="key white {activeKey == i ? 'bg-gray-300' : 'bg-white'}"
        data-note={key.note}
        on:mousedown={() => playKey(key, i)}
        on:mouseup={() => stopKey()}>
        <audio bind:this={key.keyAudio} src={key.outtaTuneSource} />
      </div>
    {:else}
      <div
        class="key black {activeKey == i ? 'bg-black' : 'bg-gray-800'}"
        data-note={key.note}
        on:mousedown={() => playKey(key, i)}
        on:mouseup={() => stopKey()}>
        <audio bind:this={key.keyAudio} src={key.outtaTuneSource} />
      </div>
    {/if}
  {/each}
</div>

<div class="flex flex-col items-center my-4">
  {#if !toggled}
    <h3 class="my-2">Life Before Jordan</h3>
  {:else}
    <h3 class="my-2">Life After Jordan</h3>
  {/if}
  <Toggle on:toggled={toggleActive} toggled />
</div>
