document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".newrole form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission behavior
        
        // Retrieve form data
        const roleName = document.getElementById("role-name").value;
        const department = document.getElementById("role-department").value;
        const description = document.getElementById("description").value;
        const location = document.getElementById("location").value;
        
        // Create a new role object
        const newRole = {
            roleName: roleName,
            department: department,
            description: description,
            location: location
            // Add more properties as needed
        };
        
        // Perform any necessary actions with the new role object (e.g., store it, send it to a server, etc.)
        console.log("New Role:", newRole);
        
        // Reset form fields
        form.reset();
    });
    
    const cancelButton = form.querySelector('button[type="button"]');
    cancelButton.addEventListener("click", function() {
        form.reset(); // Reset form fields
    });
});
