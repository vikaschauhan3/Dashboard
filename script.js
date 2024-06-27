document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('orgChart').getContext('2d');
    const radarCtx = document.getElementById('radarChart').getContext('2d');

    const barChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Org A', 'Org B', 'Org C'],
            datasets: [{
                label: 'Comparative Metrics',
                data: [10, 20, 30],
                backgroundColor: ['red', 'blue', 'green']
            }]
        }
    });

    const radarChart = new Chart(radarCtx, {
        type: 'radar',
        data: {
            labels: ['Metric 1', 'Metric 2', 'Metric 3', 'Metric 4'],
            datasets: [
                {
                    label: 'Org A',
                    data: [65, 59, 90, 81],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Org B',
                    data: [28, 48, 40, 19],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Org C',
                    data: [80, 81, 56, 55],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }
            ]
        }
    });

    window.compareOrg = (org) => {
        const data = {
            'Org A': [10, 20, 30],
            'Org B': [15, 25, 35],
            'Org C': [20, 30, 40]
        };
        barChart.data.datasets[0].data = data[org];
        barChart.update();
    };
});
