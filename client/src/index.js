import './css/style.css';
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('#modal');
  const modalBtn = document.querySelector('#modal-btn');
  const ideaList = document.querySelector('#idea-list');
  const ideaForm = document.querySelector('#idea-form');

  // Open modal
  function open() {
    modal.style.display = 'block';
  }

  // Close modal
  function close() {
    modal.style.display = 'none';
  }

  // Close modal if clicked outside
  function outsideClick(e) {
    if (e.target === modal) {
      close();
    }
  }

  // Fetch random ideas from the API
  async function fetchIdeas() {
    try {
      const response = await fetch('http://localhost:8000/api/ideas');
      const data = await response.json();

      if (data.success) {
        const ideas = data.data;

        // Clear existing ideas
        ideaList.innerHTML = '';

        // Retrieve the username from localStorage
        const username = localStorage.getItem('username');

        // Display ideas on the page
        ideas.forEach((idea) => {
          const card = document.createElement('div');
          card.classList.add('card');

          const deleteBtn = document.createElement('button');
          deleteBtn.classList.add('delete');
          deleteBtn.innerHTML = '<i class="fas fa-times"></i>';

          // Check if the user is the owner of the idea
          if (idea.username === username) {
            deleteBtn.style.display = 'block';
            deleteBtn.addEventListener('click', () => {
              deleteIdea(idea._id);
            });
          } else {
            deleteBtn.style.display = 'none';
          }

          const title = document.createElement('h3');
          title.textContent = idea.text;

          // Display tag if it exists and add the appropriate class for the tag like tag-technology, tag-business, etc. while also making the first letter uppercase
          const tag = document.createElement('p');
          if (idea.tag) {
            tag.classList.add(`tag`, `tag-${idea.tag.toLowerCase()}`); // Adds the appropriate class for the tag like tag-technology, tag-business, etc.
            tag.textContent =
              idea.tag.charAt(0).toUpperCase() + idea.tag.slice(1); // Make the first letter uppercase
          }

          const postedBy = document.createElement('p');
          postedBy.innerHTML = `Posted on <span class="date">${formatDate(
            idea.date // Format date as "Month DD, YYYY via the formatDate() function outside of the fetchIdeas() function"
          )}</span> by <span class="author">${idea.username}</span>`;

          card.appendChild(deleteBtn);
          card.appendChild(title);
          card.appendChild(tag);
          card.appendChild(postedBy);

          ideaList.appendChild(card);
        });
      } else {
        console.error('Failed to fetch ideas:', data.error);
      }
    } catch (error) {
      console.error('Error fetching ideas:', error);
    }
  }

  // Delete idea
  async function deleteIdea(ideaId) {
    try {
      const response = await fetch(
        `http://localhost:8000/api/ideas/${ideaId}`,
        {
          method: 'DELETE',
        }
      );
      const data = await response.json();

      if (data.success) {
        fetchIdeas(); // Refresh ideas after deletion
      } else {
        console.error('Failed to delete idea:', data.error);
      }
    } catch (error) {
      console.error('Error deleting idea:', error);
    }
  }

  // Submit idea
  async function submitIdea(event) {
    event.preventDefault();

    const usernameInput = document.querySelector('#username');
    const ideaTextInput = document.querySelector('#idea-text');
    const tagInput = document.querySelector('#tag');

    const username = usernameInput.value.trim();
    const ideaText = ideaTextInput.value.trim();
    const tag = tagInput.value.trim();

    if (!username || !ideaText || !tag) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/api/ideas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `username=${encodeURIComponent(
          username
        )}&text=${encodeURIComponent(ideaText)}&tag=${encodeURIComponent(tag)}`,
      });
      const data = await response.json();

      if (data.success) {
        usernameInput.value = '';
        ideaTextInput.value = '';
        tagInput.value = '';
        close(); // Close the modal
        fetchIdeas(); // Refresh ideas after submission

        // Store the username in localStorage
        localStorage.setItem('username', username);
      } else {
        console.error('Failed to submit idea:', data.error);
      }
    } catch (error) {
      console.error('Error submitting idea:', error);
    }
  }

  // Format date as "Month DD, YYYY" // Utility function - can be used anywhere by calling formatDate()
  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  }

  modalBtn.addEventListener('click', open);
  window.addEventListener('click', outsideClick);
  ideaForm.addEventListener('submit', submitIdea);

  // Fetch ideas when the page loads
  fetchIdeas();
});
