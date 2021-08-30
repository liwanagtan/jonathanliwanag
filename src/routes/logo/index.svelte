<script>
	let logos = [
		{ id: '1', src: 'logo-1' },
		{ id: '2', src: 'logo-2' },
		{ id: '3', src: 'logo-3' },
		{ id: '4', src: 'logo-4' },
		{ id: '5', src: 'logo-5' },
		{ id: '6', src: 'logo-6' },
		{ id: '7', src: 'logo-7' },
		{ id: '8', src: 'logo-8' },
		{ id: '9', src: 'logo-9' }
	];
</script>

<svelte:head>
	<title>SMG | Stickers</title>
</svelte:head>

<main class="h-full font-visby bg-[#151515] text-white p-24">
	<div class="flex justify-between text-sm font-semibold text-gray-900 mb-12 bg-yellow-500 rounded-lg p-4">
		<a href="/website"><span>Web Designs</span></a>
		<a href="/">Go back home</a>
		<a href="/poster">Posters</a>
	</div>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 items center">
        {#each logos as { id, src }, i}
		<div class="h-full w-full object-cover">
            <img src="static/portfolio/logos/logo-{id}.jpg" alt="" class="w-full h-full object-cover">
        </div>
	    {/each}
    </div>
</main>