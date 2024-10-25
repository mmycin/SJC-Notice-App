<!-- Notification.svelte -->
<script>
    import Toastify from 'toastify-js';
    import 'toastify-js/src/toastify.css';

    // Function to show a notification
    export function Notify(message, duration = 3000) {
        Toastify({
            text: message,
            duration: duration,
            gravity: "bottom", // 'top' or 'bottom'
            position: 'right', // 'left', 'center' or 'right'
            backgroundColor: "#333",
            stopOnFocus: true, // Prevents dismissing of toast on hover
            onClick: function(){} // Callback after click
        }).showToast();
    }
</script>
