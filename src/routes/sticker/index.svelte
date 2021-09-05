<script>
	let logos = [
		{ id: '1', src: 'Sticker1' },
		{ id: '2', src: 'Sticker2' },
		{ id: '3', src: 'Sticker3' },
		{ id: '4', src: 'Sticker4' },
		{ id: '5', src: 'Sticker5' },
		{ id: '6', src: 'Sticker6' },
		{ id: '7', src: 'Sticker7' },
		{ id: '8', src: 'Sticker8' },
		{ id: '9', src: 'Sticker9' },
		{ id: '10', src: 'Sticker10' },
		{ id: '11', src: 'Sticker11' },
		{ id: '12', src: 'Sticker12' },
		{ id: '13', src: 'Sticker13' },
		{ id: '14', src: 'Sticker14' },
		{ id: '15', src: 'Sticker15' },
		{ id: '16', src: 'Sticker16' },
		{ id: '17', src: 'Sticker17' },
		{ id: '18', src: 'Sticker18' },
		{ id: '19', src: 'Sticker19' },
		{ id: '20', src: 'Sticker20' }
	];
</script>

<svelte:head>
	<title>Sticker Designs</title>
</svelte:head>

<main class="h-full font-visby bg-[#151515] text-white p-24">
	<div class="flex justify-between text-sm font-semibold text-gray-900 mb-12 bg-yellow-500 rounded-lg p-4">
		<a href="/print"><span>Prints</span></a>
		<a href="/">Go back home</a>
		<a href="/website">Web Designs</a>
	</div>
    <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 items center">
        {#each logos as { id, src }, i}
		<img src="/portfolio/stickers/Sticker{id}.jpg" alt="">
	    {/each}
    </div>
</main>