<script>
    import axios from "axios";
    import { onMount } from "svelte";
    import Typed from "typed.js";

    let currentIndex = 0;
    let images = [];
    const iter = 3;
    for(let i = 1; i <= iter; i++) {
        images.push(`/${i}.jpg`);
    }
    let typedInstance;
    let teacherCount = 0;

    const yearsSinceEstablishment = new Date().getFullYear() - 1954;

    async function fetchTeacherCount() {
        try {
            const response = await axios.get(
                "http://localhost:8080/api/faculties",
            );
            // Calculate total teachers by reducing over all departments and their members
            teacherCount = response.data.reduce((total, department) => {
                return total + department.members.length;
            }, 0);
        } catch (error) {
            console.error("Error fetching teacher count:", error);
            teacherCount = 0;
        }
    }

    onMount(async () => {
        await fetchTeacherCount();
        typedInstance = new Typed("#typed-text", {
            strings: [
                "Welcome to Saint Joseph Higher Secondary School",
                "Together We Learn, Together We Grow",
                "Discover Your Path: Excellence in Education Awaits",
                "Beyond Boundaries: Discover, Innovate, Inspire",
                "Empowering Futures: Where Education Meets Innovation",
            ],
            typeSpeed: 50,
            showCursor: true,
            cursorChar: "|",
            loop: true,
            backSpeed: 30,
        });

        const interval = setInterval(nextImage, 5000);

        return () => {
            if (typedInstance) typedInstance.destroy();
            clearInterval(interval);
        };
    });

    const prevImage = () => {
        currentIndex =
            currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    };

    const nextImage = () => {
        currentIndex = (currentIndex + 1) % images.length;
    };

    const goToImage = (index) => {
        currentIndex = index;
    };
</script>

<!-- Page Content -->
<section class="text-center text-white py-8">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
            class="flex flex-col md:flex-row items-center justify-between mb-12"
        >
            <div class="w-full md:w-1/2 text-left mb-8 md:mb-0">
                <h1 class="text-3xl md:text-4xl font-bold mb-4">
                    <span id="typed-text"></span>
                </h1>
                <p
                    class="text-xl md:text-2xl font-bold text-gray-300 mb-4 animate-fade-in"
                >
                    "Advancing in Wisdom and Virtue"
                </p>
                <p
                    class="text-lg mb-6 animate-fade-in"
                    style="animation-delay: 0.3s;"
                >
                    Stay updated with the latest notices and information from
                    our school.
                </p>
                <a
                    href="/notices"
                    class="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-full transition duration-300 inline-block animate-fade-in"
                    style="animation-delay: 0.6s;"
                >
                    View Notices
                </a>
            </div>
            <div class="w-full md:w-1/2 flex justify-center md:justify-end">
                <div class="relative w-56 h-56 md:w-72 md:h-72 animate-float">
                    <img
                        src="/logo.jpg"
                        alt="School Icon"
                        class="w-full h-full object-cover rounded-full shadow-2xl"
                    />
                    <div
                        class="absolute inset-0 bg-blue-500 opacity-20 rounded-full"
                    ></div>
                </div>
            </div>
        </div>
    </div>

    <!-- Carousel Section -->
    <div
        class="mt-12 mx-auto mb-16 w-full max-w-5xl relative px-4 sm:px-6 lg:px-8"
    >
        <!-- Carousel Images -->
        <div
            class="overflow-hidden rounded-lg shadow-lg border border-gray-700 w-full h-[300px] sm:h-[400px] md:h-[500px]"
        >
            {#each images as image, index}
                <!-- svelte-ignore a11y-img-redundant-alt -->
                <img
                    src={`/slider/${image}`}
                    alt="Carousel Image"
                    class="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-500 ease-in-out"
                    style="opacity: {index === currentIndex
                        ? 1
                        : 0}; z-index: {index === currentIndex ? 1 : 0};"
                />
            {/each}
        </div>
        <!-- Navigation Buttons -->
        <button
            class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white px-4 py-2 rounded-full hover:bg-opacity-100 transition-all duration-300 z-10"
            on:click={prevImage}
        >
            &#10094;
        </button>
        <button
            class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white px-4 py-2 rounded-full hover:bg-opacity-100 transition-all duration-300 z-10"
            on:click={nextImage}
        >
            &#10095;
        </button>
        <!-- Dots Indicator -->
        <div
            class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center z-10"
        >
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
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
                class="text-3xl font-bold mb-8 text-center animate-fade-in-down"
            >
                Principal's Message
            </h2>
            <div
                class="flex flex-col md:flex-row items-center md:items-start gap-8"
            >
                <!-- Principal's Image -->
                <div
                    class="w-full md:w-1/3 flex flex-col items-center animate-fade-in-left"
                >
                    <img
                        src={`/slider/principal.png`}
                        alt="Br. Leo James Pereira PhD"
                        class="rounded-lg shadow-2xl w-full max-w-sm h-auto mb-4"
                    />
                    <h3 class="text-xl font-semibold text-center">
                        Br. Leo James Pereira PhD
                    </h3>
                    <p class="text-blue-400">Principal</p>
                </div>

                <!-- Principal's Message -->
                <div class="w-full md:w-2/3 space-y-4 animate-fade-in-right">
                    <p class="text-gray-300 leading-relaxed">
                        'Society has a greater need for people of values than it
                        has for scholars', reflected Fr. Moreau in his writings
                        on Christian Education. Fr. Basile A. Moreau, a French
                        priest, and educator founded the Congregation of Holy
                        Cross in the era of post-French revolution realizing the
                        dearth of values and true education in the society. The
                        essence and demand of this statement are still on the
                        rise, and in fact, a crucial need that will continue to
                        persist ahead.
                    </p>
                    <p class="text-gray-300 leading-relaxed">
                        Educational institutions in Bangladesh and around the
                        world design and implement academic programs to prepare
                        the students for facing the changing world that emerges
                        with contemporary and advanced knowledge, emotional
                        intelligence, moral and ethical values of life. An
                        educational institution is one of the primary places for
                        imparting modern-day knowledge, inculcating and
                        cultivating values in young students, and thus producing
                        people of values.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Summary of the Institution -->
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <h2 class="text-2xl font-bold text-gray-300 mb-4">
            Overview of St. Joseph Higher Secondary School
        </h2>
        <p class="text-gray-300 text-lg leading-relaxed">
            Running under the Brothers of Holy Cross, St. Joseph Higher
            Secondary School, established in 1954, has evolved into a premier
            institution in Bangladesh. With a focus on quality education,
            leadership development, and social values, it aims to create
            well-rounded individuals. The school's campus, located in Dhaka,
            boasts spacious buildings, multiple playgrounds, and a vibrant
            academic atmosphere.
        </p>
        <a
            href="/about"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 inline-block"
            >Learn More</a
        >
    </div>
</section>

<!-- Hero Section -->
<section class="bg-gray-900 text-white py-16">
    <div
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center"
    >
        <!-- Left side with image -->
        <div class="w-full md:w-1/2 mb-8 md:mb-0">
            <img
                src="/slider/3.jpg"
                alt="Saint Joseph Higher Secondary School"
                class="rounded-lg shadow-2xl w-full h-auto animate-fade-in-left"
            />
        </div>

        <!-- Right side with text and cards -->
        <div class="w-full md:w-1/2 md:pl-8">
            <h1
                class="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-down"
            >
                Saint Joseph Higher Secondary School
            </h1>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <!-- Card 1 - Dynamic Teacher Count -->
                <div
                    class="bg-gray-800 p-4 rounded-lg shadow-md animate-fade-in-up"
                    style="animation-delay: 0.2s;"
                >
                    <h2 class="text-2xl font-semibold mb-2">
                        {teacherCount || "..."}
                    </h2>
                    <p>Teachers</p>
                </div>
                <div
                    class="bg-gray-800 p-4 rounded-lg shadow-md animate-fade-in-up"
                    style="animation-delay: 0.4s;"
                >
                    <h2 class="text-2xl font-semibold mb-2">
                        {yearsSinceEstablishment}
                    </h2>
                    <p>Years</p>
                </div>

                <!-- Card 3 -->
                <div
                    class="bg-gray-800 p-4 rounded-lg shadow-md animate-fade-in-up"
                    style="animation-delay: 0.6s;"
                >
                    <h2 class="text-2xl font-semibold mb-2">3750+</h2>
                    <p>Students</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="bg-gray-900 text-white py-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
            class="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
        >
            <div class="flex flex-col items-center p-6">
                <img
                    src="/club.jpg"
                    alt="Club"
                    class="w-32 h-32 object-cover rounded-full mb-4 border-4 border-blue-600"
                />
                <h2 class="text-3xl font-bold mb-4 text-center">Our Clubs</h2>
                <p class="text-lg mb-6 text-center text-gray-300">
                    Join our vibrant clubs to explore passions, develop skills,
                    and make friends. From sports to arts, there's a club for
                    everyone!
                </p>

                <div class="text-center">
                    <a
                        href="/clubs"
                        class="inline-block px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
                    >
                        Explore Our Clubs
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="bg-gray-900 text-white py-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
            class="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
        >
            <div class="flex flex-col items-center p-6">
                <img
                    src="/faculty.jpg"
                    alt="Faculty"
                    class="w-32 h-32 object-cover rounded-full mb-4 border-4 border-blue-600"
                />
                <h2 class="text-3xl font-bold mb-4 text-center">
                    Our Faculties
                </h2>
                <p class="text-lg mb-6 text-center text-gray-300">
                    Meet our dedicated faculty who provide quality education and
                    guidance, empowering students to achieve excellence in their
                    academic journey.
                </p>

                <div class="text-center">
                    <a
                        href="/faculty"
                        class="inline-block px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
                    >
                        Our Faculty Members
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
<hr />

<style>
    section {
        background-color: transparent;
    }

    button {
        cursor: pointer;
        outline: none;
    }

    button:focus {
        box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
    }

    button[class*="absolute"] {
        font-size: 1.5rem;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .overflow-hidden:hover button[class*="absolute"] {
        opacity: 1;
    }

    @media (max-width: 640px) {
        button[class*="absolute"] {
            opacity: 0;
            transition: opacity 0.3s ease;
        }
    }

    @keyframes float {
        0%,
        100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .animate-float {
        animation: float 6s ease-in-out infinite;
    }

    .animate-fade-in {
        animation: fadeIn 1s ease-out forwards;
        opacity: 0;
    }

    .animate-fade-in-left {
        animation: fadeInLeft 1s ease-out;
    }

    .animate-fade-in-down {
        animation: fadeInDown 1s ease-out;
    }

    .animate-fade-in-up {
        animation: fadeInUp 1s ease-out;
    }

    .animate-fade-in-right {
        animation: fadeInRight 1s ease-out;
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
</style>
