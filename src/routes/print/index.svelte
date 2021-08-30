<script>
	let prints = [
		{ id: '1', src: 'flyer-1' },
		{ id: '2', src: 'flyer-2' },
		{ id: '3', src: 'photo-paper-1' },
		{ id: '4', src: 'photo-paper-2' }
	];
</script>

<svelte:head>
	<title>SMG | Print Designs</title>
</svelte:head>

<main class="h-full font-visby bg-[#151515] text-white p-24">
	<div class="flex justify-between text-sm font-semibold text-gray-900 mb-12 bg-yellow-500 rounded-lg p-4">
		<a href="/print"><span>Prints</span></a>
		<a href="/">Go back home</a>
		<a href="/sticker">Stickers</a>
	</div>
    <div class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-10 items center">
        {#each prints as { id, src }, i}
		<div class="h-full w-full object-cover">
            <img src="/portfolio/prints/{src}.jpg" alt="" class="w-full h-full object-cover">
        </div>
	    {/each}
    </div>
</main>