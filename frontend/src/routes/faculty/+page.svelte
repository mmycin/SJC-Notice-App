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
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {#each groupedFaculties[group] as faculty}
                        <div class="bg-gray-800 rounded-lg shadow-lg p-4 text-center hover:shadow-xl transition-shadow duration-200">
                            <a href={`/faculty/${faculty.name}`} class="text-xl font-semibold text-blue-400 hover:text-blue-300">
                                {faculty.name}
                            </a>
                            <p class="text-sm text-gray-500">{faculty.group}</p>
                        </div>
                    {/each}
                </div>
            </section>
        {/each}
    {:else}
        <p class="text-gray-400 text-center">No data available</p>
    {/if}
</div>
