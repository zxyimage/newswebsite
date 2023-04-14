const apiKey = 'dfd33e9d71ac44d2b0aac74b2d731b27'; // Replace 'YOUR_API_KEY' with your actual API key from NewsAPI
const apiUrl = `https://newsapi.org/v2/everything?q=artificial+intelligence&apiKey=${apiKey}`;

async function getNews() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    displayNews(data.articles);
}

function displayNews(articles) {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = articles.map(article => `
        <div class="news-item">
            <img src="${article.urlToImage}" alt="${article.title}">
            <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
            <p>${article.description}</p>
        </div>
    `).join('');
}

getNews();
