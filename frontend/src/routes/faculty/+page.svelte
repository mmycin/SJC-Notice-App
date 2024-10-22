<script>
    // @ts-nocheck
    // @ts-ignore
    import axios from 'axios';

    let faculties = [];

    (async function () {
        const response = await axios.get("http://localhost:8080/api/faculties");
        faculties = response.data;
        console.log(faculties);
    })();

    // Helper function to group faculties by their group
    function groupFacultiesByGroup(faculties) {
        return faculties.reduce((groups, faculty) => {
            if (!groups[faculty.group]) {
                groups[faculty.group] = [];
            }
            groups[faculty.group].push(faculty);
            return groups;
        }, {});
    }

    // Create a reactive variable for grouped faculties
    $: groupedFaculties = groupFacultiesByGroup(faculties);
</script>

<div class="p-6 bg-gray-900 text-white">
    <h1 class="text-3xl font-bold mb-6 text-center">Faculty</h1>
    {#if faculties.length > 0}
        {#each Object.keys(groupedFaculties) as group}
            <section class="mb-6">
                <h2 class="text-2xl font-semibold mb-6 mt-4">{group}</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {#each groupedFaculties[group] as faculty}
                        <a href={`/faculty/${faculty.name}`} class="block bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out">
                            <h3 class="text-2xl font-bold text-blue-400 hover:text-blue-300 mb-2">
                                {faculty.name}
                            </h3>
                            <p class="text-sm text-gray-500 mb-4">Members: {faculty.members.length}</p>
                        </a>
                    {/each}
                </div>
            </section>
        {/each}
    {:else}
        <p class="text-gray-400 text-center">No data available</p>
    {/if}
</div>

<style>
    .hover\:shadow-2xl:hover {
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    }

    .transform {
        transition: transform 0.3s ease;
    }

    .hover\:translate-y-2:hover {
        transform: translateY(-0.5rem);
    }

    a:hover h3 {
        color: #60A5FA; /* Light blue on hover */
    }
</style>
