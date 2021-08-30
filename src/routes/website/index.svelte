<script>
	let prints = [
		{ id: '1', src: 'WebDes1.jpg' },
		{ id: '2', src: 'WebDes8.jpg' },
		{ id: '3', src: 'WebDes9.jpg' },
		{ id: '4', src: 'WebDes10.jpg' },
		{ id: '5', src: 'WebDes15.jpg' },
		{ id: '6', src: 'WebDes16.png' },
		{ id: '7', src: 'WebDes17.png' }
	];
</script>

<svelte:head>
	<title>SMG | Web Designs</title>
</svelte:head>

<main class="h-full font-visby bg-[#151515] text-white p-24">
	<div class="flex justify-between text-sm font-semibold text-gray-900 mb-12 bg-yellow-500 rounded-lg p-4">
		<a href="/sticker"><span>Stickers</span></a>
		<a href="/">Go back home</a>
		<a href="/logo">Logo Designs</a>
	</div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items center">
        {#each prints as { id, src }, i}
		<div class="h-full w-full object-cover">
            <img src="static/portfolio/web/{src}" alt="" class="w-full h-full object-cover">
        </div>
	    {/each}
    </div>
</main>