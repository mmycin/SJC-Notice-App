<script>
    // You can import any additional components or scripts here if needed
    const images = [
        { src: '/slider/4.jpg', alt: 'St. Joseph Higher Secondary School Building' },
        { src: '/slider/5.jpg', alt: 'Students in classroom' },
        { src: '/slider/6.jpg', alt: 'School campus' },
        { src: '/slider/7.jpg', alt: 'School campus' },
    ];
</script>

<style>
    .about-section {
        color: #f8f9fa;
        padding: 60px 20px;
        font-family: 'Poppins', sans-serif;
        animation: fadeIn 0.8s ease-in-out;
        text-align: center;
    }

    .section-title {
        font-size: 2.8rem;
        font-weight: 700;
        text-align: center;
        margin-bottom: 40px;
        text-transform: uppercase;
        letter-spacing: 2px;
        color: #00a8ff;
    }

    .section-content {
        max-width: 900px;
        margin: 0 auto;
        font-size: 1.2rem;
        line-height: 1.8;
        padding: 0 30px;
        opacity: 0.95;
    }

    .highlight {
        color: #ffd700;
        font-weight: 600;
    }

    .animation-fade {
        opacity: 0;
        animation: fadeIn 1.2s forwards;
    }

    .animation-fade-up {
        opacity: 0;
        transform: translateY(30px);
        animation: fadeInUp 1.2s forwards;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .button {
        display: inline-block;
        margin-top: 30px;
        background-color: #00a8ff;
        color: #ffffff;
        padding: 12px 25px;
        border-radius: 50px;
        font-size: 1.1rem;
        font-weight: 600;
        text-decoration: none;
        transition: all 0.3s ease;
        box-shadow: 0 4px 6px rgba(0, 168, 255, 0.1);
    }

    .button:hover {
        background-color: #0056b3;
        transform: translateY(-2px);
        box-shadow: 0 6px 8px rgba(0, 168, 255, 0.2);
    }

    .subsection {
        margin-bottom: 50px;
    }

    .subsection-title {
        font-size: 2.2rem;
        font-weight: 600;
        margin-bottom: 25px;
        color: #ffd700;
    }

    .image-container {
        margin: 30px auto;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        max-width: 800px;
    }

    .section-image {
        width: 100%;
        height: auto;
        object-fit: cover;
        transition: transform 0.3s ease;
    }

    .section-image:hover {
        transform: scale(1.05);
    }

    @media (max-width: 768px) {
        .section-title {
            font-size: 2.2rem;
        }

        .subsection-title {
            font-size: 1.8rem;
        }

        .section-content {
            font-size: 1rem;
        }
    }
</style>

<section class="about-section">
    <h1 class="section-title animation-fade">The Institution in Retrospect</h1>
    <div class="section-content animation-fade-up subsection">
        <p>
            Under the guidance of the <span class="highlight">Brothers of Holy Cross</span>, a Roman Catholic Religious Congregation committed to educating the masses, St. Joseph Higher Secondary School was founded on <span class="highlight">March 19, 1954</span>. The school's humble beginnings saw only four students at its first location in Narinda, Dhaka.
        </p>
        <p>
            The late <span class="highlight">Brother Jude Costello, C.S.C.</span> established the school, which quickly outgrew its original site. As it expanded, the institution moved to a larger location in Narinda before finally settling at its current address: <span class="highlight">97 Asad Avenue, Mohammadpur, Dhaka</span> in <span class="highlight">1965</span>.
        </p>
        <p>
            Originally an English Medium International School, St. Joseph's adapted to the changing times, transforming into a Bengali Medium Secondary School in <span class="highlight">1972</span>. The visionary leadership of <span class="highlight">Brother John Rozario, C.S.C.</span> was instrumental in elevating the school to Higher Secondary status, introducing various sections to meet diverse educational needs.
        </p>
    </div>

    <div class="image-container animation-fade-up">
        <img src={images[0].src} alt={images[0].alt} class="section-image" />
    </div>

    <h2 class="subsection-title animation-fade">Aims and Goals</h2>
    <div class="section-content animation-fade-up subsection">
        <p>
            Our motto, <span class="highlight">"Advancing in Wisdom and Virtue,"</span> encapsulates the essence of our mission. At St. Joseph's, we strive to provide an education that goes beyond academics, fostering moral values, leadership skills, and a strong sense of social responsibility. We aim to nurture not just students, but future leaders who will contribute positively to society.
        </p>
    </div>

    <div class="image-container animation-fade-up">
        <img src={images[1].src} alt={images[1].alt} class="section-image" />
    </div>

    <h2 class="subsection-title animation-fade">The Institution at a Glance</h2>
    <div class="section-content animation-fade-up subsection">
        <p>
            St. Joseph Higher Secondary School has built a legacy of excellence, consistently achieving outstanding results in public examinations. Our committed faculty members dedicate themselves to nurturing both the intellectual and personal growth of our students, many of whom have gone on to excel in various fields nationally and internationally.
        </p>
        <p>
            Admission to our institution is highly sought after, with thousands of applicants vying for limited spots each year. Our well-structured academic programs cater to different streams, ensuring a comprehensive and well-rounded educational experience for all our students.
        </p>
    </div>

    <div class="image-container animation-fade-up">
        <img src={images[2].src} alt={images[2].alt} class="section-image" />
    </div>

    <h2 class="subsection-title animation-fade">Buildings and Campus</h2>
    <div class="section-content animation-fade-up">
        <p>
            Nestled in a tranquil area of Dhaka City, our sprawling <span class="highlight">3.5-acre campus</span> boasts state-of-the-art facilities, including spacious classrooms, well-equipped laboratories, and extensive sports grounds. Our institution is thoughtfully designed to create an inspiring and conducive environment that fosters both academic excellence and personal development.
        </p>
    </div>

    <div class="image-container animation-fade-up">
        <img src={images[3].src} alt={images[3].alt} class="section-image" />
    </div>

    <div class="text-center">
        <a href="/contact" class="button">Contact Us</a>
    </div>
</section>
