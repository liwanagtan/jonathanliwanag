
<script>
    import "../styles/tailwind-output.css";
    import Services from '$lib/services.svelte'
</script>

<!-- <header class="bg-[#020202] text-white w-full px-8 md:px-24 py-8 flex justify-center space-x-12 font-bold text-center">
    <a href="/#works" class="hover:text-blue-300 transition-colors duration-500">Portfolio</a>
    <a href="/#contact-us" class="hover:text-blue-300 transition-colors duration-500">Contact Me</a>
</header> -->
<slot></slot>
<Services />
<footer class="bg-[#020202] w-full md:px-24 py-8">
    <p class="text-white text-sm text-center tracking-wide">Copyright &copy; Jonathan Liwanag</p>
</footer>