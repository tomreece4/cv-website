// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks){
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Project modal logic (projects page only)
const modal = document.getElementById("projectModal");
const modalBody = document.getElementById("modal-body");
const closeButton = document.querySelector(".close");
const projectCards = document.querySelectorAll(".card");

const projectDetails = [
  {
    content: `
      <h3>Machine Learning - Simulating Evolutionary Techniques to Recreate Images</h3>
      <p>During this project, I used evolutionary techniques to recreate three images to the highest possible accuracy using just 100 polygons, achieving ~96% accuracy — the best in my cohort.</p>
      <img src="static/images/projects/evo_project/side_by_sides.png" alt="Project Image">
      <p>The algorithm mimics genetic evolution by iteratively mutating a population, evaluating fitness, and breeding the strongest candidates.</p>
      <img src="static/images/projects/evo_project/accuracy_comparisons.png" alt="Accuracy comparisons">
      <img src="static/images/projects/evo_project/table_of_accuracy.png" alt="Accuracy table">
    `
  },
  {
    content: `
      <h3>Data Structures & Algorithms Simulator</h3>
      <p>Visualises searching, sorting and traversal algorithms with a TKinter UI. Users choose algorithm and parameters, then watch the algorithm in action.</p>
      <ul>
        <li>Sorting: Selection, Insertion, Bubble, Quick, Merge</li>
        <li>Searching: Binary, Linear</li>
        <li>Traversal: DFS, BFS</li>
      </ul>
      <img src="static/images/projects/DSA_project/DSA_GUI.png" alt="GUI">
      <p><a href="https://github.com/tomreece4/dsa-visualisations" target="_blank" rel="noopener">View the repo</a></p>
      <img src="static/images/projects/DSA_project/bubble_sort.gif" alt="Bubble Sort">
      <img src="static/images/projects/DSA_project/binary_search.gif" alt="Binary Search">
    `
  },
  {
    content: `
      <h3>Financial News Sentiment Analysis Tool</h3>
      <p>Collects recent articles and assigns sentiment scores, surfacing the most positive and negative items likely to impact stock prices.</p>
      <img src="static/images/projects/sentiment_analysis/positive_articles.png" alt="Positive articles">
    `
  },
  { content: `<h3>HTCondor Job Interface</h3><p>GUI for dispatching deep learning jobs to a university HTCondor cluster.</p>` },
  { content: `<h3>FPL Team Selector</h3><p>Builds an optimised Fantasy Premier League squad using API data.</p>` },
  { content: `<h3>Tax Calculator</h3><p>Generates a breakdown of UK taxes and take-home pay with a downloadable PDF.</p>` },
];

if (modal && modalBody && closeButton){
  projectCards.forEach((card, index) => {
    card.addEventListener("click", () => {
      if (projectDetails[index]){
        modalBody.innerHTML = projectDetails[index].content;
        modal.style.display = "block";
        document.body.classList.add("modal-open");
      }
    });
  });
  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  });
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
      document.body.classList.remove("modal-open");
    }
  });
}
