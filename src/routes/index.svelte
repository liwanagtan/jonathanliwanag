<!-- Start Coding Here -->
<script>
	let works = [
		{ id: '1', img: 'thumbs/logo.png', href: '/logo', title: 'Logo Design' },
        { id: '2', img: 'thumbs/poster.png', href: '/poster', title: 'Posters' },
        { id: '3', img: 'thumbs/web.png', href: '/webiste', title: 'Website Design' },
        { id: '4', img: 'thumbs/flyer.png', href: '/print', title: 'Prints' },
        { id: '5', img: 'thumbs/sticker.png', href: '/sticker', title: 'Stickers' }
	];
</script>

<svelte:head>
	<title>Sypiea Media Group</title>
</svelte:head>

<main class="h-full font-visby bg-[#151515]">
    <section class="h-2/4 m-auto flex flex-col space-y-6 justify-center items-center bg-[#0c0c0c] py-40 px-[10%]">
        <h1 class="text-7xl text-center font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-br from-[#b97112] to-[#f8ba14]">Skypiea Media</h1>
        <p class="text-2xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-50">We help company build a solid foundation for their success through design.</p>
    </section>
    <section class="flex bg-[#0e0e0e] flex-col items-center h-full w-full p-24">
        <h2 class="text-5xl font-bold mb-12 text-white">Our Portfolio</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-5 gap-10 w-full">
            {#each works as work, i}
            <a href="{work.href}"><div class="rounded-lg overflow-hidden relative group">
                <div>
                    <img src="{work.img}" alt="{work.title}" class="w-full object-cover transform duration-700 group-hover:scale-110">   
                    <div class="w-full h-full bottom-0 left-0 absolute bg-gradient-to-t from-black to-transparent"></div>
                </div>
                <div class="w-full h-full inset-0 absolute bg-gradient-to-t from-[#054dc0] to-transparent opacity-0 group-hover:opacity-100 opacity duration-1000"></div>
                <h3 class="text-white font-bold text-2xl bottom-0 absolute pl-8 pb-8 group-hover:text-3xl transition-all duration-500">{work.title}</h3>
            </a>
            {/each}
            <!-- <a href="poster"><div class="rounded-lg overflow-hidden relative group">
                <img src="thumbs/poster.png" alt="" class="w-full object-cover transform duration-700 group-hover:scale-110">
                <div class="w-full h-full bottom-0 left-0 absolute bg-gradient-to-t from-[#054dc0] to-transparent opacity-0 group-hover:opacity-100 opacity duration-1000"></div>
            </a>
            <a href="/website"><div class="rounded-lg overflow-hidden relative group">
                <img src="thumbs/web.png" alt="" class="w-full object-cover transform duration-700 group-hover:scale-110">
                <div class="w-full h-full bottom-0 left-0 absolute bg-gradient-to-t from-[#054dc0] to-transparent opacity-0 group-hover:opacity-100 opacity duration-1000"></div>
            </a>
            <a href="print"><div class="rounded-lg overflow-hidden relative group">
                <img src="thumbs/flyer.png" alt="" class="w-full object-cover transform duration-700 group-hover:scale-110">
                <div class="w-full h-full bottom-0 left-0 absolute bg-gradient-to-t from-[#054dc0] to-transparent opacity-0 group-hover:opacity-100 opacity duration-1000"></div>
            </a>
            <a href="sticker"><div class="rounded-lg overflow-hidden relative group">
                <img src="thumbs/sticker.png" alt="" class="w-full object-cover transform duration-700 group-hover:scale-110">
                <div class="w-full h-full bottom-0 left-0 absolute bg-gradient-to-t from-[#054dc0] to-transparent opacity-0 group-hover:opacity-100 opacity duration-1000"></div>
            </a> -->
        </div>
    </section>
</main>