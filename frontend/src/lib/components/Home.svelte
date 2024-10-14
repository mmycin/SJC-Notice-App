<!-- Hero Section -->
<section class="pt-24 pb-12 bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-4xl sm:text-5xl font-extrabold mb-6 animate-fadeIn">Welcome to Saint Joseph</h1>
        <p class="text-lg sm:text-xl font-light mb-8">Stay updated with the latest notices and information from SJC</p>
        <a href="/notices" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out animate-buttonPulse">View Notices</a>
    </div>
</section>

<!-- Carousel Section -->
<section class="bg-gray-900 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-white text-center mb-6">Our Campus Life</h2>
        <div class="relative">
            <div class="carousel-container overflow-hidden relative w-full">
                <!-- Carousel Items -->
                <div class="carousel-images flex transition-transform duration-700 ease-in-out">
                    <img src="/slider/image1.jpg" alt="Campus Image 1" class="w-full object-cover h-64 sm:h-80">
                    <img src="/slider/image2.jpg" alt="Campus Image 2" class="w-full object-cover h-64 sm:h-80">
                    <img src="/slider/image3.jpg" alt="Campus Image 3" class="w-full object-cover h-64 sm:h-80">
                    <!-- Add more images as needed -->
                </div>
            </div>

            <!-- Navigation Arrows -->
            <button id="prevSlide" class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2">
                &#10094;
            </button>
            <button id="nextSlide" class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2">
                &#10095;
            </button>
        </div>
    </div>
</section>

<!-- Contact Section -->
<section class="py-12 bg-gray-800 text-gray-200">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <form class="max-w-2xl mx-auto">
            <div class="grid grid-cols-1 gap-6">
                <input type="text" placeholder="Your Name" class="p-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <input type="email" placeholder="Your Email" class="p-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <textarea placeholder="Your Message" class="p-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out">Send Message</button>
            </div>
        </form>
    </div>
</section>

<!-- Carousel Slider Script -->
<script>
    let currentIndex = 0;
    const slides = document.querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;

    const updateSlidePosition = () => {
        const offset = -currentIndex * 100; // Shift slides by 100% for each image
        document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
    };

    document.getElementById('prevSlide').addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
        updateSlidePosition();
    });

    document.getElementById('nextSlide').addEventListener('click', () => {
        currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
        updateSlidePosition();
    });
</script>

<!-- Animations -->
<style>
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

    @keyframes buttonPulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
    }

    .animate-fadeIn {
        animation: fadeIn 0.8s ease-in-out;
    }

    .animate-buttonPulse {
        animation: buttonPulse 1.5s infinite;
    }
</style>
