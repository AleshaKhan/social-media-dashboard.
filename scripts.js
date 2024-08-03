
// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    // Simulated API data
    const apiData = {
        followers: 1200,
        likes: 500,
        shares: 200,
        followerGrowth: [10, 20, 30, 40, 50],
        engagementRates: [5, 15, 25, 35, 45],
        activityTimelines: [2, 4, 6, 8, 10]
    };

    // Update quick stats
    document.getElementById('followersCount').innerText = apiData.followers;
    document.getElementById('likesCount').innerText = apiData.likes;
    document.getElementById('sharesCount').innerText = apiData.shares;

    // Chart configurations
    const followerGrowthCtx = document.getElementById('followerGrowthChart').getContext('2d');
    const engagementRatesCtx = document.getElementById('engagementRatesChart').getContext('2d');
    const activityTimelinesCtx = document.getElementById('activityTimelinesChart').getContext('2d');

    // Follower Growth Chart
    new Chart(followerGrowthCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Follower Growth',
                data: apiData.followerGrowth,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        }
    });

    // Engagement Rates Chart
    new Chart(engagementRatesCtx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Engagement Rates',
                data: apiData.engagementRates,
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }]
        }
    });

    // Activity Timelines Chart
    new Chart(activityTimelinesCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Activity Timelines',
                data: apiData.activityTimelines,
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1
            }]
        }
    });
});

