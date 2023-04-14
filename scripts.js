const apiKey = 'dfd33e9d71ac44d2b0aac74b2d731b27'; // Replace 'YOUR_API_KEY' with your actual API key from NewsAPI
const apiUrl = `https://newsapi.org/v2/everything?q=artificial+intelligence&apiKey=${apiKey}`;

async function getNews() {
  try {
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=artificial+intelligence&apiKey=dfd33e9d71ac44d2b0aac74b2d731b27"
    );
    if (response.status === 200) {
      const data = await response.json();
      if (data && data.articles) {
        displayNews(data.articles);
      } else {
        console.error("Unexpected API response format:", data);
      }
    } else {
      console.error("Failed to fetch news with status:", response.status);
    }
  } catch (error) {
    console.error("Error fetching news:", error);
  }
}

function displayNews(articles) {
  const newsHTML = articles.map((article) => {
    return `
      <div class="news-article">
        <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
        <p>${article.description}</p>
      </div>
    `;
  });
  document.getElementById("news-container").innerHTML = newsHTML.join("");
}

