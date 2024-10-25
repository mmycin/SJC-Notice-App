<script>
    import axios from "axios";
    import { onMount } from "svelte";

    let events = [];
    let loading = true;

    onMount(async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/events");
            events = response.data;
            console.log("Events:", events);
            
        } catch (error) {
            console.error("Failed to fetch events:", error);
        } finally {
            loading = false;
        }
    });
</script>

<style>
    @keyframes pulse {
        0%, 100% { opacity: 0.5; }
        50% { opacity: 1; }
    }
    .loading-pulse {
        animation: pulse 1.5s infinite ease-in-out;
    }
</style>

<div class="container mx-auto px-4 py-12 bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen">
    <h1 class="text-4xl font-bold text-white mb-8 text-center">Upcoming Events</h1>
    {#if loading}
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each Array(6) as _}
                <div class="bg-gray-800 shadow-2xl rounded-lg overflow-hidden loading-pulse">
                    <div class="w-full h-56 bg-gray-700"></div>
                    <div class="p-6">
                        <div class="h-8 bg-gray-700 rounded mb-3"></div>
                        <div class="h-4 w-1/2 bg-gray-700 rounded"></div>
                    </div>
                </div>
            {/each}
        </div>
    {:else}
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each events as event}
                <div class="bg-gray-800 shadow-2xl rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
                    <img src={event.imageUrl} alt={event.title} class="w-full h-56 object-cover object-center" />
                    <div class="p-6">
                        <h2 class="text-2xl font-semibold text-white mb-3 truncate">{event.title}</h2>
                        <p class="text-sm text-blue-400 font-medium">{event.date}</p>
                    </div>
                </div>
            {/each}
        </div>
    {/if}
</div>