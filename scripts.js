// Initialize the markdown-it converter
const md = window.markdownit();

// Function to fetch and display the Markdown content
async function displayMarkdown() {
  try {
    const response = await fetch("content.md");
    if (response.status === 200) {
      const markdownContent = await response.text();
      const htmlContent = md.render(markdownContent);
      document.getElementById("markdown-container").innerHTML = htmlContent;
    } else {
      console.error("Failed to fetch Markdown content with status:", response.status);
    }
  } catch (error) {
    console.error("Error fetching Markdown content:", error);
  }
}

// Call the displayMarkdown function when the page loads
displayMarkdown();
