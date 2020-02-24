<script lang="typescript">
  import Nav from "../components/Nav.svelte";

  export let segment: string;
</script>

<style>
  :global(body) {
    background-color: #6a5c80;
  }

  main {
    position: relative;
    max-width: 70em;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>
