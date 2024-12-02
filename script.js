document.getElementById('generate-webhook').addEventListener('click', function() {
    const uniqueId = 'webhook-' + Math.random().toString(36).substr(2, 9);
    const webhookUrl = `https://your-vercel-app.vercel.app/webhook/${uniqueId}`;
    
    document.getElementById('webhook-url').innerText = `Your unique webhook URL: ${webhookUrl}`;
    document.getElementById('webhook-url').classList.remove('hidden');

    // Store the unique ID in local storage for later
    localStorage.setItem('webhookId', uniqueId);
});

// Function to show notifications
function showNotification(data) {
    if (Notification.permission === 'granted') {
        new Notification('Webhook Notification', {
            body: data.message,
        });
    }
}

// Request notification permission
if (Notification.permission !== 'denied') {
    Notification.requestPermission();
}

// Simulated webhook endpoint (for demonstration purposes)
if (window.location.pathname.startsWith('/webhook/')) {
    const uniqueId = window.location.pathname.split('/').pop();
    const storedId = localStorage.getItem('webhookId');

    if (uniqueId === storedId) {
        // Simulate receiving data (you would replace this with actual data handling)
        const data = { message: 'Webhook triggered!' };
        showNotification(data);
    }
}
