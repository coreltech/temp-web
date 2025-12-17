const API_URL = "http://localhost:8055/items/posts?filter[status][_eq]=published&sort=-published_at&fields=*,cover.*";

async function fetchPosts() {
  try {
    const response = await fetch(API_URL);
    const { data } = await response.json();

    const postsContainer = document.getElementById("posts");
    postsContainer.innerHTML = "";

    data.forEach(post => {
      const postCard = document.createElement("article");
      postCard.classList.add("post-card");

      postCard.innerHTML = `
        <img src="http://localhost:8055/assets/${post.cover?.id || ''}" alt="${post.title}" class="post-cover" />
        <h3>${post.title}</h3>
        <p>${post.excerpt || ""}</p>
        <button class="read-more" onclick="viewPost(${post.id})">Leer más</button>
      `;

      postsContainer.appendChild(postCard);
    });
  } catch (error) {
    console.error("Error al cargar los posts:", error);
  }
}

function viewPost(id) {
  window.location.href = `post.html?id=${id}`;
}

document.addEventListener("DOMContentLoaded", fetchPosts);
