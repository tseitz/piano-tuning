<script>
  import Piano from "../components/Piano.svelte";
</script>

<style>
  h1,
  figure {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  figure {
    margin: 0 0 1em 0;
  }

  img {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1em 0;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>Jordan Boland Piano Tuning</title>
</svelte:head>

<h1>Jordan Boland Piano Tuning</h1>

<figure class="flex justify-center">
  <img alt="Borat" src="great-success.png" />
</figure>

<Piano />

<h2>Testimonials</h2>
<p>
  Jordan did a really great job on my piano! She is also veeerrrryyyyy sexy, so
  don't you wait, call now!!
</p>
