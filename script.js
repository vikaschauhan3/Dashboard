document.addEventListener('DOMContentLoaded', function() {
    const services = {
        service1: { name: 'Service 1', overview: 'Overview of Service 1', data: [10, 20, 30, 40], comparisonData: [15, 25, 35, 45] },
        service2: { name: 'Service 2', overview: 'Overview of Service 2', data: [15, 25, 35, 45], comparisonData: [20, 30, 40, 50] },
        service3: { name: 'Service 3', overview: 'Overview of Service 3', data: [20, 30, 40, 50], comparisonData: [25, 35, 45, 55] },
    };

    const overviewContainer = document.getElementById('service-overview');
    const lineChartCtx = document.getElementById('lineChart').getContext('2d');
    const barChartCtx = document.getElementById('barChart').getContext('2d');
    const ratingSummary = document.getElementById('rating-summary');
    
    let selectedServices = [];

    document.querySelectorAll('input[name="service"]').forEach(radio => {
        radio.addEventListener('change', function() {
            const serviceKey = this.value;
            if (this.checked) {
                selectedServices.push(serviceKey);
            } else {
                selectedServices = selectedServices.filter(s => s !== serviceKey);
            }
            updatePage();
        });
    });

    function updatePage() {
        updateOverview();
        updateCharts();
        updateRatingSummary();
    }

    function updateOverview() {
        overviewContainer.innerHTML = '';
        selectedServices.forEach(serviceKey => {
            const service = services[serviceKey];
            const serviceDiv = document.createElement('div');
            serviceDiv.className = 'service-box';
            serviceDiv.innerHTML = `<h3>${service.name}</h3><p>${service.overview}</p>`;
            overviewContainer.appendChild(serviceDiv);
        });
    }

    function updateCharts() {
        const labels = ['Q1', 'Q2', 'Q3', 'Q4'];
        const datasets = selectedServices.map(serviceKey => {
            return {
                label: services[serviceKey].name,
                data: services[serviceKey].data,
                fill: false,
                borderColor: getRandomColor(),
                tension: 0.1
            };
        });

        new Chart(lineChartCtx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: datasets
            }
        });

        const barDatasets = selectedServices.map(serviceKey => {
            return {
                label: services[serviceKey].name,
                data: services[serviceKey].comparisonData,
                backgroundColor: getRandomColor()
            };
        });

        new Chart(barChartCtx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: barDatasets
            }
        });
    }

    function updateRatingSummary() {
        if (selectedServices.length === 0) {
            ratingSummary.innerHTML = '';
            return;
        }

        const highestRatedService = selectedServices[0];
        ratingSummary.innerHTML = `<h3>Highest Rated Service: ${services[highestRatedService].name}</h3><p>Summary: ${services[highestRatedService].overview}</p>`;
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
