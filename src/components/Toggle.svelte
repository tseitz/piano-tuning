<script>
  import { slide } from 'svelte/transition';
</script>

<style></style>

<h3>Regular Ass Piano</h3>

<div class="h-16 w-32 rounded-full bg-green-300">
  <div
    class="h-16 w-16 rounded-full bg-green-500"
    transition:slide="{delay: 250, duration: 300, easing: quintOut }"
  ></div>
</div>
