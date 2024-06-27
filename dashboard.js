// Data for the charts
const organizationData = {
    IAIA: {
        expertise: 90,
        globalReach: 95,
        customizablePrograms: 80,
        alumniNetwork: 90
    },
    CPIA: {
        expertise: 85,
        globalReach: 75,
        customizablePrograms: 90,
        alumniNetwork: 80
    },
    IPDET: {
        expertise: 80,
        globalReach: 85,
        customizablePrograms: 85,
        alumniNetwork: 85
    }
};

const colorScheme = {
    IAIA: '#8884d8',
    CPIA: '#82ca9d',
    IPDET: '#ffc658'
};

// Function to create the bar chart
function createBarChart() {
    const ctx = document.getElementById('comparisonChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Expertise', 'Global Reach', 'Customizable Programs', 'Alumni Network'],
            datasets: Object.entries(organizationData).map(([org, data]) => ({
                label: org,
                data: Object.values(data),
                backgroundColor: colorScheme[org]
            }))
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

// Function to create the radar chart
function createRadarChart() {
    const ctx = document.getElementById('radarChart').getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Expertise', 'Global Reach', 'Customizable Programs', 'Alumni Network'],
            datasets: Object.entries(organizationData).map(([org, data]) => ({
                label: org,
                data: Object.values(data),
                backgroundColor: `${colorScheme[org]}33`,
                borderColor: colorScheme[org],
                pointBackgroundColor: colorScheme[org]
            }))
        },
        options: {
            responsive: true,
            scales: {
                r: {
                    angleLines: {
                        display: true
                    },
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            }
        }
    });
}

// Initialize charts when the page loads
window.addEventListener('load', () => {
    createBarChart();
    createRadarChart();
});
