<script>
  let keys = [
    {
      label: "C",
      type: "white"
    },
    {
      label: "C_SHARP",
      type: "black",
      left: calcLeft(1)
    },
    {
      label: "D",
      type: "white"
    },
    {
      label: "D_SHARP",
      type: "black",
      left: calcLeft(2)
    },
    {
      label: "E",
      type: "white"
    },
    {
      label: "F",
      type: "white"
    },
    {
      label: "F_SHARP",
      type: "black",
      left: calcLeft(4)
    },
    {
      label: "G",
      type: "white"
    },
    {
      label: "G_SHARP",
      type: "black",
      left: calcLeft(5)
    },
    {
      label: "A",
      type: "white"
    },
    {
      label: "A_SHARP",
      type: "black",
      left: calcLeft(6)
    },
    {
      label: "B",
      type: "white"
    }
  ];

  function calcLeft(i) {
    return `${14.28 * i - 3.17}%`;
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

  .white {
    width: 14.28%;
    height: 30em;
    background-color: #ffffff;
    color: rgb(32, 32, 32);
    z-index: 0;
    text-shadow: 0px 1px 1px rgba(32, 32, 32, 0.5);
  }

  .black {
    position: absolute;
    width: 6%;
    height: 18em;
    background-color: rgb(32, 32, 32);
    color: #ffffff;
    z-index: 1;
    text-shadow: 0px -1px 1px rgba(255, 255, 255, 0.5);
  }

  .key {
    font-family: Helvetica;
    font-weight: 100;
    font-size: 12px;
    border: 1px solid rgba(32, 32, 32, 0.2);
    border-radius: 0px 0px 5px 5px;
    cursor: pointer;
    box-shadow: 0px 5px 1px rgba(32, 32, 32, 0.2);
  }
</style>

<div class="piano-wrapper">
  {#each keys as key, i}
    {#if key.type === 'white'}
      <div class="{key.type} key" id={key.label} />
    {:else}
      <div class="{key.type} key" id={key.label} style="left: {key.left}" />
    {/if}
  {/each}
</div>
