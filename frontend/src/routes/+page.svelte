<!-- Page Content -->
<section class="text-center text-white py-16">
    <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold mb-6" id="welcome">
            Welcome to Saint Joseph Higher Secondary School
        </h2>
        
        <p class="text-2xl font-bold text-gray-300 mb-8">"Advancing in Wisdom and Virtue"</p>
        <p class="text-lg mb-8">
            Stay updated with the latest notices and information from our
            school.
        </p>
        <a
            href="/notices"
            class="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-full transition duration-300 inline-block"
            >View Notices</a
        >
    </div>

    <!-- Carousel Section -->
    <div class="mt-12 mx-auto mb-16 w-full max-w-6xl relative">
        <!-- Carousel Images -->
        <div class="overflow-hidden rounded-lg shadow-lg border border-gray-700 w-full h-[400px] sm:h-[500px] md:h-[600px]">
            {#each images as image, index}
                <!-- svelte-ignore a11y-img-redundant-alt -->
                <img
                    src={`/slider/${image}`}
                    alt="Carousel Image"
                    class="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-500 ease-in-out" 
                    style="opacity: {index === currentIndex ? 1 : 0}; z-index: {index === currentIndex ? 1 : 0};"
                />
            {/each}
        </div>
        <!-- Navigation Buttons -->
        <button
            class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white px-4 py-2 rounded-full hover:bg-opacity-100 transition-all duration-300 z-10"
            on:click={prevImage}
        >
            &#10094; <!-- Left Arrow -->
        </button>
        <button
            class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white px-4 py-2 rounded-full hover:bg-opacity-100 transition-all duration-300 z-10"
            on:click={nextImage}
        >
            &#10095; <!-- Right Arrow -->
        </button>
        <!-- Dots Indicator -->
        <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center z-10">
            {#each images as _, index}
                <button
                    class="w-3 h-3 rounded-full mx-1 bg-gray-600 hover:bg-blue-500 transition-all duration-300"
                    class:bg-blue-500={index === currentIndex}
                    on:click={() => goToImage(index)}
                ></button>
            {/each}
        </div>
    </div>

    <!-- Principal's Message Section -->
    <section class="bg-gray-900 text-white py-16">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold mb-8 text-center animate-fade-in-down">Principal's Message</h2>
            <div class="flex flex-col md:flex-row items-center md:items-start gap-8">
                <!-- Principal's Image -->
                <div class="w-full md:w-1/3 flex flex-col items-center animate-fade-in-left">
                    <img src={`/slider/principal.png`} alt="Br. Leo James Pereira PhD" class="rounded-lg shadow-2xl w-full max-w-sm h-auto mb-4">
                    <h3 class="text-xl font-semibold text-center">Br. Leo James Pereira PhD</h3>
                    <p class="text-blue-400">Principal</p>
                </div>
                
                <!-- Principal's Message -->
                <div class="w-full md:w-2/3 space-y-4 animate-fade-in-right">
                    <p class="text-gray-300 leading-relaxed">
                        'Society has a greater need for people of values than it has for scholars', reflected Fr. Moreau in his writings on Christian Education. Fr. Basile A. Moreau, a French priest, and educator founded the Congregation of Holy Cross in the era of post-French revolution realizing the dearth of values and true education in the society. The essence and demand of this statement are still on the rise, and in fact, a crucial need that will continue to persist ahead.
                    </p>
                    <p class="text-gray-300 leading-relaxed">
                        Educational institutions in Bangladesh and around the world design and implement academic programs to prepare the students for facing the changing world that emerges with contemporary and advanced knowledge, emotional intelligence, moral and ethical values of life. An educational institution is one of the primary places for imparting modern-day knowledge, inculcating and cultivating values in young students, and thus producing people of values.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Summary of the Institution -->
    <div class="container mt-8">
        <h2 class="text-2xl font-bold text-gray-300 mb-4">Overview of St. Joseph Higher Secondary School</h2>
        <p class="text-gray-300 text-lg leading-relaxed">
            Running under the Brothers of Holy Cross, St. Joseph Higher Secondary School, established in 1954, has evolved into a premier institution in Bangladesh. With a focus on quality education, leadership development, and social values, it aims to create well-rounded individuals. The school's campus, located in Dhaka, boasts spacious buildings, multiple playgrounds, and a vibrant academic atmosphere.
        </p>
        <a href="/about" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 inline-block">Learn More</a>
    </div>
</section>

<!-- Hero Section -->
<section class="bg-gray-900 text-white py-16">
    <div class="container mx-auto px-4 flex flex-wrap items-center">
        <!-- Left side with image -->
        <div class="w-full md:w-1/2 mb-8 md:mb-0">
            <img src="/slider/3.jpg" alt="Saint Joseph Higher Secondary School" class="rounded-lg shadow-2xl w-full h-auto animate-fade-in-left">
        </div>
        
        <!-- Right side with text and cards -->
        <div class="w-full md:w-1/2 md:pl-8">
            <h1 class="text-4xl font-bold mb-6 animate-fade-in-down">
                Saint Joseph Higher Secondary School
            </h1>
            
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <!-- Card 1 -->
                <div class="bg-gray-800 p-4 rounded-lg shadow-md animate-fade-in-up" style="animation-delay: 0.2s;">
                    <h2 class="text-2xl font-semibold mb-2">79</h2>
                    <p>Teachers</p>
                </div>
                
                <!-- Card 2 -->
                <div class="bg-gray-800 p-4 rounded-lg shadow-md animate-fade-in-up" style="animation-delay: 0.4s;">
                    <h2 class="text-2xl font-semibold mb-2">70</h2>
                    <p>Years</p>
                </div>
                
                <!-- Card 3 -->
                <div class="bg-gray-800 p-4 rounded-lg shadow-md animate-fade-in-up" style="animation-delay: 0.6s;">
                    <h2 class="text-2xl font-semibold mb-2">3750+</h2>
                    <p>Students</p>
                </div>
            </div>
        </div>
    </div>
</section>




<script lang="js">
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
        background-color: transparent; /* Remove background color to show the global background */
    }

    button {
        cursor: pointer;
        outline: none;
    }

    button:focus {
        box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5); /* Add focus ring for accessibility */
    }

    /* Improve button visibility */
    button[class*="absolute"] {
        font-size: 1.5rem;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    /* Add hover effect to carousel */
    .overflow-hidden:hover button[class*="absolute"] {
        opacity: 1;
    }

    /* Hide buttons by default on mobile */
    @media (max-width: 640px) {
        button[class*="absolute"] {
            opacity: 0;
            transition: opacity 0.3s ease;
        }
    }

    /* Animations */
    .animate-fade-in-left {
        animation: fadeInLeft 1s ease-out;
    }

    .animate-fade-in-down {
        animation: fadeInDown 1s ease-out;
    }

    .animate-fade-in-up {
        animation: fadeInUp 1s ease-out;
    }

    @keyframes fadeInLeft {
        from {
            opacity: 0;
            transform: translateX(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes fadeInDown {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* New animations */
    .animate-fade-in-right {
        animation: fadeInRight 1s ease-out;
    }

    @keyframes fadeInRight {
        from {
            opacity: 0;
            transform: translateX(20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    /* Additional styles for the Principal's Message section */
    .container {
        max-width: 1200px;
    }

    .text-gray-300 {
        line-height: 1.8;
    }

    @keyframes typing {
        from { width: 0 }
        to { width: 100% }
    }

    .animate-typing {
        display: inline-block;
        overflow: hidden;
        white-space: nowrap;
        animation: typing 2s steps(40, end);
    }
</style>
