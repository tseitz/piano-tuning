<script>
	export let segment;
</script>

<style>
	nav {
		/* border-bottom: 1px solid rgba(255,62,0,0.1); */
		font-weight: 300;
		padding: 0 1em;
    background-color: #524763;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 6px 20px;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	.selected {
		display: inline-block;
	}

	.selected::after, a:hover::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: white;
		display: block;
		bottom: -1px;
	}

	a {
    position: relative;
		text-decoration: none;
		padding: 1em 0.5em;
    display: block;
    color: white;
  }
</style>

<nav>
	<ul>
		<li><a class:selected='{segment === undefined}' href='.'>home</a></li>
		<li><a rel=prefetch class:selected='{segment === "contact"}' href='contact'>contact</a></li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<!-- <li><a rel=prefetch class:selected='{segment === "blog"}' href='blog'>blog</a></li> -->
	</ul>
</nav>
