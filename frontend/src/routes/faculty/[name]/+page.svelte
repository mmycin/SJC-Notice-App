<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import axios from 'axios';

    let faculty = [];
    console.log($page.params.name);

    onMount(async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/faculty/${$page.params.name}/members`);
            faculty = response.data;
            console.log(faculty);
        } catch (error) {
            console.error('Error fetching faculty data:', error);
        }
    });
</script>

<div class="p-6 bg-gray-900 text-white">
    <h1 class="text-3xl font-bold mb-6 text-center">Department of {$page.params.name}</h1>
    {#if faculty.length > 0}
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {#each faculty as member}
                <div class="bg-gray-800 rounded-lg shadow-lg p-4 text-center hover:shadow-xl transition-shadow duration-200">
                    <img src={member.image} alt={member.name} class="w-24 h-24 rounded-full object-cover mx-auto mb-4" />
                    <h2 class="text-xl font-semibold mb-2">{member.name}</h2>
                    <p class="text-gray-400">{member.position}</p>
                </div>
            {/each}
        </div>
    {:else}
        <p class="text-gray-400 text-center">Loading faculty information...</p>
    {/if}
</div>
