<script>
    import axios from "axios";
    import { onMount } from "svelte";
    import Toastify from 'toastify-js';
    import 'toastify-js/src/toastify.css';

    let name = "";
    let email = "";
    let type = "Info";
    let message = "";
    let types = [];
    let isSubmitting = false;

    onMount(async () => {
        try {
            const response = await axios.get(
                "http://localhost:8080/api/contact/types",
            );
            types = response.data;
            if (types.length > 0) {
                type = types[0]; // Set default type to first option
            }
        } catch (error) {
            console.error("Error fetching contact types:", error);
            showNotification("Failed to load contact types. Please try again later.", "error");
        }
    });

    function showNotification(message, type = "success") {
        const backgroundColor = type === "success" ? "#28a745" : "#dc3545";
        
        Toastify({
            text: message,
            duration: 3000,
            gravity: "bottom",
            position: "right",
            backgroundColor,
            stopOnFocus: true,
            onClick: function(){},
            style: {
                borderRadius: '8px',
                padding: '12px 24px',
            }
        }).showToast();
    }

    const resetForm = () => {
        name = "";
        email = "";
        message = "";
        if (types.length > 0) {
            type = types[0];
        }
    };

    const submitForm = async () => {
        if (isSubmitting) return;
        
        isSubmitting = true;
        
        try {
            const response = await axios.post('http://localhost:8080/api/contact', {
                name,
                email,
                type,
                message,
            });
            
            showNotification('Message sent! We’ll contact you via email soon.', 'success');
            resetForm();
        } catch (error) {
            console.error('Error submitting form:', error);
            const errorMessage = error.response?.data?.message || 'Failed to send message. Please try again.';
            showNotification(errorMessage, 'error');
        } finally {
            isSubmitting = false;
        }
    };
</script>

<section class="contact-section py-12">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="section-title">Contact Us</h2>
        <p class="text-center mb-4">
            St. Joseph Higher Secondary School<br />
            97 Asad Avenue, Mohammadpur, Dhaka - 1207<br />
            Email:
            <a href="mailto:sjhss.bd@gmail.com" class="text-blue-400">sjhss.bd@gmail.com</a><br />
            Phone: <span class="text-blue-400">02-41022469</span>
        </p>

        <form class="max-w-2xl mx-auto" on:submit|preventDefault={submitForm}>
            <div class="grid grid-cols-1 gap-6">
                <input
                    type="text"
                    placeholder="Your Name"
                    class="form-input"
                    id="name"
                    bind:value={name}
                    required
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    class="form-input"
                    bind:value={email}
                    id="email"
                    required
                />
                <select 
                    name="type" 
                    id="type" 
                    bind:value={type}
                    class="form-input"
                >
                    {#each types as contactType}
                        <option value={contactType}>{contactType}</option>
                    {/each}
                </select>

                <textarea
                    placeholder="Your Message"
                    class="form-input"
                    rows="4"
                    bind:value={message}
                    id="message"
                    required
                ></textarea>
                <button 
                    type="submit" 
                    class="button"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
            </div>
        </form>

        <h3 class="text-xl font-bold text-center mt-12 mb-4">Location</h3>
        <div class="map-container">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4342.568792428211!2d90.36774443082774!3d23.759838451258886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf542648ba63%3A0xdb1b53586c75ba96!2sSaint%20Joseph%20Higher%20Secondary%20School!5e0!3m2!1sen!2sbd!4v1632312995121!5m2!1sen!2sbd"
                width="100%"
                height="400"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                title="School Location"
            >
            </iframe>
        </div>
    </div>
</section>

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

    .form-input,
    select {
        padding: 1rem;
        border-radius: 0.5rem;
        background-color: #333;
        color: #ccc;
        outline: none;
        transition: border 0.3s ease;
        border: 1px solid transparent;
        width: 100%;
    }

    .form-input::placeholder {
        color: #999;
    }

    .form-input:focus,
    select:focus {
        border: 2px solid #007bff;
    }

    .button {
        background-color: #007bff;
        color: #ffffff;
        padding: 12px 24px;
        border-radius: 50px;
        text-decoration: none;
        transition: all 0.3s ease;
        cursor: pointer;
    }

    .button:hover:not(:disabled) {
        background-color: #0056b3;
        transform: translateY(-1px);
    }

    .button:disabled {
        background-color: #666;
        cursor: not-allowed;
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