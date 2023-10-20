// Toggle sidebar functionality
document.getElementById('sidebarToggle').addEventListener('click', function () {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.display = (sidebar.style.display === 'none' || sidebar.style.display === '') ? 'block' : 'none';
});

// Example: Populate recent activity list with dynamic data
const activityList = document.getElementById('activityList');
const activityData = ['User John Doe registered', 'New report submitted', 'Product XYZ updated'];

activityData.forEach(function (activity) {
    const listItem = document.createElement('li');
    listItem.textContent = activity;
    activityList.appendChild(listItem);
});
