const baseUrl = 'https://e32lc.vercel.app';
const lights = ['light1', 'light2', 'light3'];

async function fetchStatus() {
    const response = await fetch(`${baseUrl}/status.json`);
    return await response.json();
}

async function updateStatus() {
    const status = await fetchStatus();
    lights.forEach((light, index) => {
        document.getElementById(`status${index + 1}`).textContent = status[light] ? 'ON' : 'OFF';
    });
}

updateStatus();
setInterval(updateStatus, 1000);
