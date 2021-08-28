<script>
    import "../styles/tailwind-output.css";
</script>

<!-- Start Coding Here -->
<header class="bg-[#020202] w-full px-24 py-8 flex items-center justify-between">
    <div>
        <img src="logo.png" alt="Skypiea Media Company" class="w-12 cursor-pointer hover:animate-spin transition-all duration-700">
    </div>
    <nav class="text-white font-black space-x-12">
        <a href="#" class="hover:text-blue-300 transition-colors duration-500">Our Work</a>
        <a href="#" class="hover:text-blue-300 transition-colors duration-500">Contact Us</a>
    </nav>
</header>
<main class="h-full font-visby bg-[#151515]">
    <section class="h-2/4 m-auto flex flex-col space-y-6 justify-center items-center bg-[#0c0c0c] py-40 px-[10%]">
        <h1 class="text-7xl text-center font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-br from-[#b97112] to-[#f8ba14]">Skypiea Media</h1>
        <p class="text-2xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-50">We help company build a solid foundation for their success through design.</p>
    </section>
    <section class="flex bg-[#0e0e0e] flex-col items-center h-full w-full p-24">
        <h2 class="text-5xl font-bold mb-12 text-white">Our Portfolio</h2>
        <div class="grid grid-cols-2 xl:grid-cols-4 gap-10 w-full">
            <a href="#"><div class="rounded-lg overflow-hidden relative group">
                <img src="thumbs/logo.png" alt="" class="w-full object-cover transform duration-700 group-hover:scale-110">
                <div class="w-full h-full bottom-0 left-0 absolute bg-gradient-to-t from-[#054dc0] to-transparent opacity-0 group-hover:opacity-100 opacity duration-1000"></div>
            </a>
            <a href="#"><div class="rounded-lg overflow-hidden relative group">
                <img src="thumbs/poster.png" alt="" class="w-full object-cover transform duration-700 group-hover:scale-110">
                <div class="w-full h-full bottom-0 left-0 absolute bg-gradient-to-t from-[#054dc0] to-transparent opacity-0 group-hover:opacity-100 opacity duration-1000"></div>
            </a>
            <a href="#"><div class="rounded-lg overflow-hidden relative group">
                <img src="thumbs/web.png" alt="" class="w-full object-cover transform duration-700 group-hover:scale-110">
                <div class="w-full h-full bottom-0 left-0 absolute bg-gradient-to-t from-[#054dc0] to-transparent opacity-0 group-hover:opacity-100 opacity duration-1000"></div>
            </a>
            <a href="#"><div class="rounded-lg overflow-hidden relative group">
                <img src="thumbs/flyer.png" alt="" class="w-full object-cover transform duration-700 group-hover:scale-110">
                <div class="w-full h-full bottom-0 left-0 absolute bg-gradient-to-t from-[#054dc0] to-transparent opacity-0 group-hover:opacity-100 opacity duration-1000"></div>
            </a>
        </div>
    </section>
</main>
<footer class="bg-[#020202] w-full px-24 py-8">
    <p class="text-white text-sm text-center tracking-wide">Copyright &copy; Shypiea Media Group</p>
</footer>