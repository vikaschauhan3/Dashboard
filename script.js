document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('orgChart').getContext('2d');
    new Chart(ctx, {
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
});
