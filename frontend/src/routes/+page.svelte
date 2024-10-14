<!-- Page Content -->
<section class="text-center bg-gray-900 text-white py-16">
    <div class="max-w-7xl mx-auto px-4">
        <h1 class="text-4xl font-bold mb-6">
            Welcome to Saint Joseph Higher Secondary School
        </h1>
        <p class="text-lg mb-8">
            Stay updated with the latest notices and information from our
            school.
        </p>
        <a
            href="/notices"
            class="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-full transition duration-300"
            >View Notices</a
        >
    </div>

    <!-- Carousel Section -->
    <div class="mt-12 mx-auto mb-16 w-full max-w-6xl"> <!-- Increased max-width for larger screens -->
        <div class="relative">
            <!-- Carousel Images -->
            <div class="overflow-hidden rounded-lg shadow-lg border border-gray-700 w-full">
                {#each images as image, index}
                    <!-- svelte-ignore a11y-img-redundant-alt -->
                    <img
                        src={`/slider/${image}`}
                        alt="Carousel Image"
                        class="w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover absolute top-0 left-0 transition-opacity duration-500 ease-in-out" 
                        style="opacity: {index === currentIndex ? 1 : 0}; z-index: {index === currentIndex ? 1 : 0};"
                    />
                {/each}
            </div>
            <!-- Navigation Buttons -->
            <button
                class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white px-4 py-2 rounded-full hover:bg-opacity-100 transition-all duration-300"
                on:click={prevImage}
            >
                &#10094; <!-- Left Arrow -->
            </button>
            <button
                class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white px-4 py-2 rounded-full hover:bg-opacity-100 transition-all duration-300"
                on:click={nextImage}
            >
                &#10095; <!-- Right Arrow -->
            </button>
        </div>
        <!-- Dots Indicator -->
        <div class="flex justify-center mt-4">
            {#each images as _, index}
                <button
                    class="w-3 h-3 rounded-full mx-1 bg-gray-600 hover:bg-blue-500 transition-all duration-300"
                    class:bg-blue-500={index === currentIndex}
                    on:click={() => goToImage(index)}
                ></button>
            {/each}
        </div>
    </div>
</section>

<script>
    import { onMount } from 'svelte';

    let currentIndex = 0;

    // Array of image filenames (make sure these match the names in your /slider directory)
    const images = [
        '1.jpg',
        '2.jpg',
        '3.jpg', // Add your actual image names
    ];

    // Function to go to the previous image
    const prevImage = () => {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    };

    // Function to go to the next image
    const nextImage = () => {
        currentIndex = (currentIndex + 1) % images.length;
    };

    // Function to go to a specific image
    const goToImage = (index) => {
        currentIndex = index;
    };

    // Auto-advance the carousel
    onMount(() => {
        const interval = setInterval(nextImage, 5000); // Change image every 5 seconds

        return () => clearInterval(interval); // Clean up on component unmount
    });
</script>

<style>
    /* Additional styles for the carousel */
    section {
        background-color: #1a202c; /* Dark background */
    }

    .carousel-button {
        transition: background-color 0.3s ease;
    }

    .carousel-button:hover {
        background-color: rgba(255, 255, 255, 0.2); /* Lighten on hover */
    }

    /* Ensures the buttons and dots are styled nicely */
    button {
        cursor: pointer;
    }
</style>
