<script>
	let logos = [
		{ id: '1', src: 'poster-1' },
		{ id: '2', src: 'poster-2' },
		{ id: '3', src: 'poster-3' }
	];
</script>

<svelte:head>
	<title>Posters</title>
</svelte:head>

<main class="h-full font-visby bg-[#151515] text-white p-24">
	<div class="flex justify-between text-sm font-semibold text-gray-900 mb-12 bg-yellow-500 rounded-lg p-4">
		<a href="/logo"><span>Logo Designs</span></a>
		<a href="/">Go back home</a>
		<a href="/print">Prints</a>
	</div>
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 items center">
        {#each logos as { id, src }, i}
		<div class="h-full w-full object-cover">
            <img src="/portfolio/posters/poster-{id}.jpeg" alt="" class="w-full h-full object-cover">
        </div>
	    {/each}
    </div>
</main>