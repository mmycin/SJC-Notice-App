<script>
    import axios from 'axios';

    let clubs = [];

    (async function () {
        const response = await axios.get('http://localhost:8080/api/clubs/');
        clubs = response.data;
    })();
</script>

<div class="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-gray-300 p-6">
    <h1 class="text-2xl font-bold text-white mb-8 pb-2">Our Clubs</h1>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
        {#each clubs as club}
            <a 
                href={club.link} 
                class="group flex flex-col bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-out hover:-translate-y-1 border border-gray-800 hover:border-indigo-500 no-underline max-w-[250px]"
                target="_blank" 
                rel="noopener noreferrer"
            >
                <div class="relative h-28 overflow-hidden">
                    <img 
                        src={club.image} 
                        alt={club.name} 
                        class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300 ease-out"
                    >
                    <div class="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                </div>
                
                <div class="p-3 flex-1 flex flex-col">
                    <h2 class="text-md font-medium text-white mb-1 line-clamp-1 group-hover:text-indigo-400 transition-colors duration-200">
                        {club.name}
                    </h2>
                </div>
            </a>
        {/each}
    </div>
</div>
