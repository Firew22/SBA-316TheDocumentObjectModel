

    // document.addEventListener("DOMContentLoaded", () => {
        const movieForm = document.getElementById("movieForm");
        const movieInput = document.getElementById("movieInput");
        const genreSelect = document.getElementById("genreSelect");
        const movieList = document.getElementById("movieList");

        movieForm.addEventListener("submit", (event) => {
          event.preventDefault(); 

          const movieTitle = movieInput.value.trim(); 
          const movieGenre = genreSelect.value; 

          // Check if the movie title already exists in the list
          if (isMovieAlreadyAdded(movieTitle)) {
            alert("This movie is already in your list!");
            return;
          }

          // Create list item and delete button
          const listItem = document.createElement("li");
          listItem.textContent = movieTitle + " (" + movieGenre + ")";
          const deleteButton = document.createElement("button");
          deleteButton.textContent = "delete";
          deleteButton.className = "delete";
          deleteButton.addEventListener("click", () => {
            listItem.remove(); // Remove the movie item from the list
          });
          listItem.appendChild(deleteButton);

          // Add the new movie item to the list
          movieList.appendChild(listItem);

          // Clear the input field
          movieInput.value = "";
        });

        function isMovieAlreadyAdded(title) {
          // Iterate over existing list items to check if the title already exists
          for (const listItem of movieList.children) {
            if (
              listItem.textContent
                .trim()
                .toLowerCase()
                .startsWith(title.toLowerCase())
            ) {
              return true; 
            }
          }
          return false; 
        }
      ;