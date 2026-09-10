   


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
    container.innerHTML = '';
    projects.forEach((p, i) => {
        container.innerHTML += `<h3><a href="${p.url}" target="_blank">${p.name}</a> <span class="info" onclick="toggleSpecs(${i})">Info</span></h3><div class="specs-panel" id="specs-${i}" style="display:none;"></div>`;
        p.specs.forEach(s => {
            document.getElementById('specs-' + i).innerHTML += `<p>${s.label}: ${s.value}</p>`
        });
    });
}

function toggleSpecs(i) {
    const panel = document.getElementById('specs-' + i);
    const isopen = panel.style.display === 'block';
    document.querySelectorAll('.specs-panel').forEach(p => p.style.display = 'none');

    if(!isopen) {
        panel.style.display = 'block';
    }
}

function showSection(id) {
    document.querySelectorAll('section').forEach(s => s.style.display = 'none');
    const target = document.getElementById(id);
    target.style.display = 'block';
    target.style.opacity = 0;

    setTimeout(function() {
        target.style.opacity = 1;
    }, 20);
}

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('info')) {
        return;
    }
    document.querySelectorAll('.specs-panel').forEach(p => p.style.display = 'none');
});
renderProjects();