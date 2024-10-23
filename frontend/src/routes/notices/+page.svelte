<div class="bg-gray-900 min-h-screen py-10">
  <div class="container mx-auto">
    <!-- Heading -->
      <h1
        class="text-4xl sm:text-5xl font-extrabold text-center text-white mb-12 tracking-wide animate-pulse font-poppins"
    >
        Josephite Notice Board
    </h1>

    
    <!-- Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <a href="/notices/general" class="transform hover:scale-105 transition-transform duration-300">
        <div class="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <img src="/notice/general.jpg" alt="Special Notice" class="w-full h-48 object-cover">
          <div class="p-6">
            <h2 class="text-xl font-semibold text-white mb-2">General Notices</h2>
          </div>
        </div>
      </a>
      <!-- Notice 1 -->
      <a href="/notices/school" class="transform hover:scale-105 transition-transform duration-300">
        <div class="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <img src="/notice/school.jpg" alt="School Notice" class="w-full h-48 object-cover">
          <div class="p-6">
            <h2 class="text-xl font-semibold text-white mb-2">School Notices</h2>
          </div>
        </div>
      </a>
      
      <!-- Notice 2 -->
      
      <!-- Notice 3 -->
      <a href="/notices/xi" class="transform hover:scale-105 transition-transform duration-300">
        <div class="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <img src="/notice/xi.jpg" alt="Class XI Notice" class="w-full h-48 object-cover">
          <div class="p-6">
            <h2 class="text-xl font-semibold text-white mb-2">Class XI Notices</h2>
          </div>
        </div>
      </a>
      
      <!-- Notice 4 -->
      <a href="/notices/xii" class="transform hover:scale-105 transition-transform duration-300">
        <div class="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <img src="/notice/xii.jpg" alt="Class XII Notice" class="w-full h-48 object-cover">
          <div class="p-6">
            <h2 class="text-xl font-semibold text-white mb-2">Class XII Notices</h2>
          </div>
        </div>
      </a>
    </div>
  </div>
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

    .animate-pulse {
        animation: pulse 1.5s infinite ease-in-out;
    }

    /* Google Fonts */
    .font-poppins {
        font-family: "Poppins", sans-serif;
    }
</style>
