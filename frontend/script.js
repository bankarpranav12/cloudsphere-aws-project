
const API_URL = "http://43.204.23.54:3000";

// Check backend health
async function checkBackend() {
    try {
        const response = await fetch(`${API_URL}/api/health`);

        if (!response.ok) {
            throw new Error("Backend request failed");
        }

        const data = await response.json();

        console.log("Backend connected:", data.message);
        updateBackendStatus(true);

    } catch (error) {
        console.error("Backend connection failed:", error.message);
        updateBackendStatus(false);
    }
}

// Update website status
function updateBackendStatus(isOnline) {
    const status = document.querySelector(".status");

    if (!status) return;

    status.innerHTML = `
        <span class="dot"></span>
        ${isOnline ? "Backend Connected" : "Backend Offline"}
    `;

    status.style.color = isOnline ? "#22c55e" : "#ef4444";
}

// Run when page loads
document.addEventListener("DOMContentLoaded", () => {
    checkBackend();
});
 
