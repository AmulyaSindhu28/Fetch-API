const userContainer = document.getElementById("userContainer");
    const errorMessage = document.getElementById("errorMessage");
    const reloadButton = document.getElementById("reloadButton");

    async function fetchUserData() {
      try {
        // Clear previous data and error messages
        userContainer.innerHTML = "";
        errorMessage.textContent = "";

        // Fetch data from the API
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        
        // Check for network errors
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const users = await response.json();

        // Display user data
        users.forEach(user => {
          const userCard = document.createElement("div");
          userCard.className = "user-card";
          userCard.innerHTML = `
            <h3>${user.name}</h3>
            <p>Email: ${user.email}</p>
            <p>Address: ${user.address.street}, ${user.address.city}</p>
          `;
          userContainer.appendChild(userCard);
        });
      } catch (error) {
        errorMessage.textContent = `Failed to fetch user data: ${error.message}`;
      }
    }

    // Add event listener to the reload button
    reloadButton.addEventListener("click", fetchUserData);

    // Initial fetch on page load
    fetchUserData();