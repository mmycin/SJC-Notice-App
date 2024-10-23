<script>
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    import axios from "axios";

    let faculty = [];

    onMount(async () => {
        try {
            const response = await axios.get(
                `http://localhost:8080/api/faculty/${$page.params.name}/members`,
            );
            faculty = response.data;
        } catch (error) {
            console.error("Error fetching faculty data:", error);
        }
    });
</script>

<div class="p-6 bg-gray-900 text-white">
    <h1 class="text-3xl font-bold mb-2 text-center">
        Department of {$page.params.name}
    </h1>
    <button
        on:click={() => history.back()}
        class="flex items-center px-4 py-2 text-white bg-blue-500 mb-4 rounded-md hover:bg-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12H3m0 0l6 6m-6-6l6-6"
            />
        </svg>
        Go Back
    </button>
    {#if faculty.length > 0}
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {#each faculty as member}
                <div
                    class="bg-gray-800 rounded-lg shadow-lg p-4 text-center hover:shadow-xl transition-shadow duration-200"
                >
                    <img
                        src={member.image}
                        alt={member.name}
                        class="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                    />
                    <h2 class="text-xl font-semibold mb-2">{member.name}</h2>
                    <p class="text-gray-400">
                        {member.position
                            .replace(/([a-z])([A-Z])/g, "$1 $2")
                            .split(" ")
                            .map(
                                (word) =>
                                    word.charAt(0).toUpperCase() +
                                    word.slice(1).toLowerCase(),
                            )
                            .join(" ")}
                    </p>
                </div>
            {/each}
        </div>
    {:else}
        <p class="text-gray-400 text-center">Loading faculty information...</p>
    {/if}
</div>
