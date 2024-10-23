<script>
    // @ts-nocheck
    // @ts-ignore
    import axios from "axios";

    let notices = [];

    (async function () {
        const response = await axios.get("http://localhost:8080/api/notices");
        notices = response.data;
    })();
</script>

<div
    class="max-w-3xl mx-auto p-4 sm:p-6 bg-gray-900 rounded-lg shadow-md mt-10 animate-fadeIn"
>
    <h1
        class="text-4xl sm:text-5xl font-extrabold text-center text-white mb-8 tracking-wide animate-pulse font-poppins"
    >
        Notice Board for School
    </h1>

    {#if notices.length > 0}
        <div class="space-y-6 sm:space-y-8">
            <button
                on:click={() => history.back()}
                class="flex items-center px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105"
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
            {#each notices as notice}
                {#if notice.category === "School"}
                    <div
                        class="relative p-4 sm:p-6 bg-gray-800 bg-opacity-60 backdrop-blur-lg border border-gray-600 rounded-lg transition-transform transform hover:scale-105 hover:rotate-3 duration-500 ease-in-out hover:shadow-2xl hover:border-blue-400"
                        style="perspective: 1000px; transform-style: preserve-3d;"
                    >
                        <div
                            class="p-2 rounded-md transition-transform transform hover:rotate-x-6 hover:rotate-y-6 duration-300 ease-out"
                        >
                            <h3
                                class="text-lg sm:text-xl font-semibold text-blue-300 transition-colors duration-300 ease-in-out hover:text-blue-400 font-poppins"
                            >
                                {notice.title}
                            </h3>
                            <p class="text-xs sm:text-sm text-gray-400 mb-2">
                                {notice.date}
                            </p>
                            <p class="mt-2 text-gray-200 text-sm sm:text-base">
                                {@html notice.content}
                            </p>
                        </div>
                        <!-- Adding light highlight effect -->
                        <div
                            class="absolute inset-0 rounded-lg bg-gradient-to-br from-transparent to-white opacity-5 pointer-events-none"
                        ></div>
                    </div>
                {/if}
            {/each}
        </div>
    {:else}
        <p class="text-center text-gray-400">There is no data available</p>
    {/if}
</div>

<style>
    /* Custom animations */
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
        100% {
            transform: scale(1);
        }
    }

    .animate-fadeIn {
        animation: fadeIn 0.8s ease-in-out forwards;
    }

    .animate-pulse {
        animation: pulse 1.5s infinite ease-in-out;
    }

    /* Google Fonts */
    .font-poppins {
        font-family: "Poppins", sans-serif;
    }
</style>
