<script>
    // @ts-nocheck
    // @ts-ignore
    import axios from 'axios';

    let notices = [];

    (async function () {
        const response = await axios.get("http://localhost:8080/api/notices");
        notices = response.data;
        console.log(notices);
    })()
</script>

<div class="max-w-3xl mx-auto p-6 bg-gray-800 rounded-lg shadow-md mt-10 animate-bounceIn">
    <h1 class="text-5xl font-bold text-center text-white mb-6">Notices for Josephites</h1>
    
    {#if notices.length > 0}
        <div class="space-y-4">
            {#each notices as notice}
            <div class="p-4 bg-gray-700 border border-gray-600 rounded-lg transition-transform transform hover:scale-105 hover:rotate-1 duration-300 ease-in-out">
                <h3 class="text-xl font-semibold text-blue-300 transition-colors duration-300 ease-in-out hover:text-blue-400">{notice.title}</h3>
                <p class="text-sm text-gray-400">{notice.date}</p>
                <p class="mt-2 text-gray-200">{notice.content}</p>
            </div>
            {/each}
        </div>
    {:else}
        <p class="text-center text-gray-400">There is no data available</p>
    {/if}
</div>

<style>
    /* Custom animations */
    @keyframes bounceIn {
        0% {
            opacity: 0;
            transform: translateY(30px);
        }
        50% {
            opacity: 1;
            transform: translateY(-10px);
        }
        100% {
            transform: translateY(0);
        }
    }
    
    @keyframes flip {
        from {
            transform: perspective(600px) rotateY(0deg);
        }
        to {
            transform: perspective(600px) rotateY(180deg);
        }
    }

    .animate-bounceIn {
        animation: bounceIn 0.5s ease forwards;
    }
</style>
