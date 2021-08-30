
<script>
    import "../styles/tailwind-output.css";
    import Services from '$lib/services.svelte'
</script>

<header class="bg-[#020202] w-full px-24 py-8 flex items-center justify-between">
    <a href="/">
        <img src="logo.png" alt="Skypiea Media Company" class="w-12 cursor-pointer hover:animate-spin transition-all duration-700">
    </a>
    <nav class="text-white font-black space-x-12">
        <a href="#" class="hover:text-blue-300 transition-colors duration-500">Our Work</a>
        <a href="#" class="hover:text-blue-300 transition-colors duration-500">Contact Us</a>
    </nav>
</header>
<slot></slot>
<Services />
<footer class="bg-[#020202] w-full px-24 py-8">
    <p class="text-white text-sm text-center tracking-wide">Copyright &copy; Skypiea Media Group</p>
</footer>