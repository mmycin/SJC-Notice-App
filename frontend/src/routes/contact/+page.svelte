<script>
    // You can import any additional components or scripts here if needed
</script>

<style>
    .contact-section {
        background-color: #1a1a1a;
        color: #f8f9fa;
        padding: 40px 20px;
        animation: fadeIn 0.8s ease-in-out;
    }

    .section-title {
        font-size: 2.5rem;
        font-weight: bold;
        text-align: center;
        margin-bottom: 30px;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .form-input {
        padding: 1rem;
        border-radius: 0.5rem;
        background-color: #333;
        color: #fff;
        outline: none;
        transition: border 0.3s ease;
    }

    .form-input:focus {
        border: 2px solid #007bff;
    }

    .button {
        background-color: #007bff;
        color: #ffffff;
        padding: 12px 24px;
        border-radius: 50px;
        text-decoration: none;
        transition: background-color 0.3s ease;
    }

    .button:hover {
        background-color: #0056b3;
    }

    .map-container {
        margin-top: 20px;
        width: 100%;
        height: 400px;
        border-radius: 8px;
        overflow: hidden;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
</style>

<section class="contact-section py-12">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="section-title">Contact Us</h2>
        <p class="text-center mb-4">
            St. Joseph Higher Secondary School<br>
            97 Asad Avenue, Mohammadpur, Dhaka - 1207<br>
            Email: <a href="mailto:sjhss.bd@gmail.com" class="text-blue-400">sjhss.bd@gmail.com</a><br>
            Phone: <span class="text-blue-400">02-41022469</span>
        </p>

        <form class="max-w-2xl mx-auto">
            <div class="grid grid-cols-1 gap-6">
                <input type="text" placeholder="Your Name" class="form-input">
                <input type="email" placeholder="Your Email" class="form-input">
                <textarea placeholder="Your Message" class="form-input" rows="4"></textarea>
                <button type="submit" class="button">Send Message</button>
            </div>
        </form>

        <h3 class="text-xl font-bold text-center mt-12 mb-4">Directions</h3>
        <div class="map-container">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9256764100966!2d90.35877531538684!3d23.764655784585014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c76445e72e9d%3A0x2af0d96cddc60199!2sSt.%20Joseph%20Higher%20Secondary%20School!5e0!3m2!1sen!2sbd!4v1631809011550!5m2!1sen!2sbd"
                width="100%"
                height="400"
                style="border:0;"
                allowfullscreen=""
                loading="lazy">
            </iframe>
        </div>
    </div>
</section>
