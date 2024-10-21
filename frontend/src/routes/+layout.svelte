<script>
    // Navbar and Contact logic can go here
    let isOpen = false;

    const toggleMenu = () => {
        isOpen = !isOpen;
    };
</script>

<!-- Layout Wrapper -->
<div class="layout">
    <!-- Navbar -->
    <nav class="bg-gray-900 shadow-lg fixed w-full z-20 top-0 left-0 mb-5 py-4"> 
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-full">
                <!-- Logo and School Name -->
                <div class="flex items-center space-x-3">
                    <a
                        href="/"
                        class="flex items-center text-4xl font-bold text-white hover:text-blue-500 transition-all duration-300 ease-in-out"
                    >
                        <img src="/icon.png" alt="School Logo" class="w-16 h-16 object-cover mr-2" />
                        <span class="font-serif text-2xl font-bold font-roboto">
                            Saint Joseph<br />Higher Secondary School
                        </span>
                    </a>
                </div>

                <!-- Desktop Menu -->
                <div class="hidden md:flex items-center space-x-6">
                    <a href="/notices" class="text-gray-300 hover:text-blue-500 transition duration-300 ease-in-out">Notice</a>
                    <a href="/about" class="text-gray-300 hover:text-blue-500 transition duration-300 ease-in-out">About</a>
                    <a href="/clubs" class="text-gray-300 hover:text-blue-500 transition duration-300 ease-in-out">Clubs</a>
                    <a href="/events" class="text-gray-300 hover:text-blue-500 transition duration-300 ease-in-out">Events</a>
                    <a href="https://www.sjsadmission.info/" class="block px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md transition duration-300" target="_blank">Admission</a>
                    <a href="/faculty" class="text-gray-300 hover:text-blue-500 transition duration-300 ease-in-out">Faculty</a>
                    <a href="/contact" class="text-gray-300 hover:text-blue-500 transition duration-300 ease-in-out">Contact</a>
                </div>

                <!-- Mobile Menu Button -->
                <div class="md:hidden">
                    <button on:click={toggleMenu} class="text-gray-300 hover:text-white focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div class={`md:hidden ${isOpen ? "block" : "hidden"} pt-3 pb-3 transition-all duration-300 bg-gray-800`}>
            <div class="px-4 pt-4 pb-4 space-y-1">
                <a href="/notices" class="block px-3 py-2 text-white hover:bg-blue-500 rounded-md">Notice</a>
                <a href="/about" class="block px-3 py-2 text-white hover:bg-blue-500 rounded-md">About</a>
                <a href="/clubs" class="block px-3 py-2 text-white hover:bg-blue-500 rounded-md">Clubs</a>
                <a href="/events" class="block px-3 py-2 text-white hover:bg-blue-500 rounded-md">Events</a>
                <a href="https://www.sjsadmission.info/" class="block px-3 py-2 text-white hover:bg-blue-500 rounded-md" target="_blank">Admission</a>
                <a href="/faculty" class="block px-3 py-2 text-white hover:bg-blue-500 rounded-md">Faculty</a>
                <a href="/contact" class="block px-3 py-2 text-white hover:bg-blue-500 rounded-md">Contact</a>
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    <main class="pt-20 md:pt-24">
        <slot></slot>
    </main>
</div>

<!-- Styling -->
<style>
    .layout {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        margin-top: 4rem; /* Adjusted to account for navbar height */
    }
    main {
        flex: 1;
        padding: 20px; /* Add padding for main content */
    }
    .font-roboto {
        font-family: 'Roboto', sans-serif;
    }
</style>
