<script>
    import axios from 'axios';

    let clubs = [];

    (async function () {
        const response = await axios.get('http://localhost:8000/api/clubs/');
        clubs = response.data;
    })();
</script>

<div class="flex flex-col items-center justify-center gap-4 p-4 bg-gray-900 min-h-screen text-gray-200">
    <h1 class="text-3xl font-bold text-white mb-4">Our Clubs</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each clubs as club}
            <a href={club.link} class="block bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out max-w-xs no-underline" target="_blank" rel="noopener noreferrer">
                <img src={club.image} alt={club.name} class="w-full h-32 object-cover">
                <div class="p-3">
                    <h2 class="text-lg font-semibold mb-1 text-white">{club.name}</h2>
                </div>
            </a>
        {/each}
    </div>
</div>
