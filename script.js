function showSection(id) {
    document.querySelectorAll('section').forEach(s => s.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

showSection('intro')

const projects = [
    {
        name: "Roadrunner",
        url: "https://github.com/Shririiiiiiiiiiiiiiiiiiiiiiang/Roadrunner-F1_RC_car",
        specs:[
            { label: "Target Speed", value: "42 kmph"},
            { label: "Weight", value: "1.2 - 1.5"},
            { label: "Motor", value: "Brushless"},
            { label: "Battery", value: "3S LiPo"},
            { label: "features", value: "Real Drs and ers system also a ton of telemetry"}
        ]
    },

    {
        name: "Nyx OS",
        url: "https://github.com/Shririiiiiiiiiiiiiiiiiiiiiiang/Nyx-OS",
        specs: [
            { label: "What is it", value: "A web help assistant and a chatbot"},
            { label: "Tech stack", value: "HTML, CSS, JS, THREE JS, MD"},
            { label: "what can it do", value: "give answer to pre defined questions, remember things and store notes and tasks"}
        ]
    },

    {
        name: "Swarm",
        url: "https://github.com/Shririiiiiiiiiiiiiiiiiiiiiiang/Project_Hive",
        specs: [
            { label: "no. of robots", value: "5 or more"},
            {label: "purpose", value: "one main robots finds obstacles/fire/water subordinted do their respective Tasks, a emergency bot kept if one subordinate bot is busy/charging"}

        ]
    },


];

function renderProjects() {
    const container = document.getElementById('projectList');
    container.innerHTML = projects.map(p => `
        <div class="project-card">
        <h3><a href="${p.url}" target="_blank">${p.name}</a></h3>
        <ul class="specs">
        ${p.specs.map(s => `<li><span class="speclabel">${s.label}</span>: ${s.value}</li>`).join('')}
        </ul>
        </div>
        `).join('');
}
showSection('intro');
renderProjects();