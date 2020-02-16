<script>
  import { keyMetadata } from 'api.js';

  let keys = {};
  let keyTracking = keyMetadata;

  function playKey(e) {
    if (keyTracking[e.target.dataset.note].plays == 1) {
      keyTracking[e.target.dataset.note].currSrc =
        keyTracking[e.target.dataset.note].inTuneSource;
    }

    keys[e.target.dataset.note].currentTime = 0;
    keys[e.target.dataset.note].play();
    keyTracking[e.target.dataset.note].plays++;
  }

  function toggleActive() {
    for (const key in keyTracking) {
      keyTracking[key].currSrc = keyTracking[key].inTuneSource;
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

<div class="piano-wrapper">
  <div data-note="C" class="key white" on:mousedown="{playKey}">
    <audio bind:this="{keys.C}" src="{keyTracking.C.currSrc}"></audio>
  </div>
  <div data-note="Db" class="key black" on:mousedown="{playKey}">
    <audio bind:this="{keys.Db}" src="{keyTracking.Db.currSrc}"></audio>
  </div>
  <div data-note="D" class="key white" on:mousedown="{playKey}">
    <audio bind:this="{keys.D}" src="{keyTracking.D.currSrc}"></audio>
  </div>
  <div data-note="Eb" class="key black" on:mousedown="{playKey}">
    <audio bind:this="{keys.Eb}" src="{keyTracking.Eb.currSrc}"></audio>
  </div>
  <div data-note="E" class="key white" on:mousedown="{playKey}">
    <audio bind:this="{keys.E}" src="{keyTracking.E.currSrc}"></audio>
  </div>
  <div data-note="F" class="key white" on:mousedown="{playKey}">
    <audio bind:this="{keys.F}" src="{keyTracking.F.currSrc}"></audio>
  </div>
  <div data-note="Gb" class="key black" on:mousedown="{playKey}">
    <audio bind:this="{keys.Gb}" src="{keyTracking.Gb.currSrc}"></audio>
  </div>
  <div data-note="G" class="key white" on:mousedown="{playKey}">
    <audio bind:this="{keys.G}" src="{keyTracking.G.currSrc}"></audio>
  </div>
  <div data-note="Ab" class="key black" on:mousedown="{playKey}">
    <audio bind:this="{keys.Ab}" src="{keyTracking.Ab.currSrc}"></audio>
  </div>
  <div data-note="A" class="key white" on:mousedown="{playKey}">
    <audio bind:this="{keys.A}" src="{keyTracking.A.currSrc}"></audio>
  </div>
  <div data-note="Bb" class="key black" on:mousedown="{playKey}">
    <audio bind:this="{keys.Bb}" src="{keyTracking.Bb.currSrc}"></audio>
  </div>
  <div data-note="B" class="key white" on:mousedown="{playKey}">
    <audio bind:this="{keys.B}" src="{keyTracking.B.currSrc}"></audio>
  </div>
</div>
