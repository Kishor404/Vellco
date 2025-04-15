var projectsPerPage = 9;
var totalPages;
var currentPage = 1;

let filter = "all";
var totalProjects;
var allProjects;
let isMobile = window.innerWidth <= 768;
let isTablet = window.innerWidth <= 1024;

// Select all li elements
const listItems = document.querySelectorAll(".shafful_filter li");

// Iterate over the li elements
listItems.forEach((item) => {
  // Add click event listener
  item.addEventListener("click", function () {
    // Call updateProjects with scrollToView as false and newFilter as the data-group attribute
    updateProjects(true, this.getAttribute("data-group"));

    // Remove active class from all li elements
    listItems.forEach((li) => li.classList.remove("active"));

    // Add active class to the clicked li
    this.classList.add("active");
  });
});

function updateProjects(scrollToView = false, newFilter = "all") {
  // If the filter is new, set currentPage to 0
  if (newFilter !== filter) {
    filter = newFilter;
    listItems.forEach((li) => li.classList.remove("active"));
    document.querySelector(`[data-group="${filter}"]`).classList.add("active");
    currentPage = 1;
  }
  console.log("currentPage", currentPage);
  if (totalProjects === undefined) {
    totalProjects = document.querySelectorAll(".project").length;
    totalPages = Math.ceil(totalProjects / projectsPerPage);
    allProjects = document.querySelectorAll(".project");
  }
  var projectsContainer = document.querySelector(".project-container");
  projectsContainer.innerHTML = "";
  // Filter the projects based on the category
  var start = (currentPage - 1) * projectsPerPage;
  var end = start + projectsPerPage;
  filteredProjects = [];
  for (let i = 1; i < totalProjects; i++) {
    let project = allProjects[i];
    let groups = project.getAttribute("data-groups");
    groups = JSON.parse(groups.replace(/&quot;/g, '"'));
    if (filter === "all" || groups.includes(filter)) {
      filteredProjects.push(project);
      if (filteredProjects.length > start && filteredProjects.length <= end) {
        project.style.display = "block";
        projectsContainer.appendChild(project);
      } else {
        project.style.display = "none";
      }
    } else {
      project.style.display = "none";
    }
  }
  var pageNumbers = document.querySelector(".ind_pagination");
  pageNumbers.innerHTML = "";
  // Check if there are no projects after filtering
  if (filteredProjects.length === 0) {
    projectsContainer.innerHTML =
      "<p>No projects match the selected filter.</p>";
    return;
  } else {
    if (currentPage > 1) {
      // Generate the prevPage link
      var prevPage = document.createElement("a");
      prevPage.id = "prevPage";
      prevPage.innerHTML = '<i class="far fa-arrow-left"></i>';
      pageNumbers.appendChild(prevPage); // Insert at the beginning

      // Event listener for prevPage
      prevPage.addEventListener("click", function () {
        currentPage--;
        updateProjects(false, filter);
      });
    }
    //if mobile, projectsPerPage = 3

    totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
    // Generate the page numbers
    for (let i = 1; i <= totalPages; i++) {
      (function (index) {
        // IIFE to capture current value of i
        if (index == currentPage) {
          let span = document.createElement("span");
          span.textContent = index.toString();
          span.classList.add("current");
          pageNumbers.appendChild(span);
        }
        if (!isMobile) {
          if (index == currentPage - 1 || index == currentPage + 1) {
            let pageLink = document.createElement("a");
            pageLink.textContent = index.toString();
            pageNumbers.appendChild(pageLink);
            pageLink.addEventListener("click", function () {
              currentPage = index;
              updateProjects(false, filter);
            });
          } else if (index == currentPage - 2 || index == currentPage + 2) {
            let span = document.createElement("span");
            span.textContent = "...";
            pageNumbers.appendChild(span);
          }
        }
      })(i); // Pass the current value of i to the IIFE
    }
    if (currentPage < totalPages) {
      // Generate the nextPage link
      var nextPage = document.createElement("a");
      nextPage.id = "nextPage";
      nextPage.innerHTML = '<i class="far fa-arrow-right"></i>';
      pageNumbers.appendChild(nextPage); // Insert at the end

      // Event listener for nextPage
      nextPage.addEventListener("click", function () {
        currentPage++;
        updateProjects(false, filter);
      });
    }
  }

  adjustProjectHeights();

  if (scrollToView) {
    document.querySelector("#projectSection").scrollIntoView({
      behavior: "smooth",
    });
  }
  // var $grid = $("#project-container");
  // $grid.shuffle({
  //   itemSelector: ".shaf_itme", // the selector for the items in the grid
  // });
}

function adjustProjectHeights() {
  // Reset all project divs to their natural height
  let projectDivs = document.querySelectorAll(".project");
  projectDivs.forEach((div) => {
    let sf5_det = div.querySelector(".sf5_det");
    let sf5_con = div.querySelector(".sf5_con");
    if (sf5_det) sf5_det.style.height = "auto";
    if (sf5_con) sf5_con.style.height = "auto";
  });

  // Determine number of projects per row based on screen width
  let projectsPerRow;
  if (isMobile) {
    // Mobile
    projectsPerRow = 1;
  } else if (isTablet) {
    // Tablet
    projectsPerRow = 2;
  } else {
    // Desktop
    projectsPerRow = 3;
  }

  // Group project divs into rows
  let rows = Array.from(projectDivs).reduce((rows, div, i) => {
    if (i % projectsPerRow === 0) rows.push([]);
    rows[rows.length - 1].push(div);
    return rows;
  }, []);

  // Iterate over each row
  rows.forEach((row) => {
    // Find the div with the maximum height in the row
    let maxHeight = Math.max(
      ...row.map((div) => {
        let sf5_det = div.querySelector(".sf5_det");
        let sf5_con = div.querySelector(".sf5_con");
        return Math.max(
          sf5_det ? sf5_det.offsetHeight : 0,
          sf5_con ? sf5_con.offsetHeight : 0
        );
      })
    );

    // Set the height of all divs in the row to the maximum height
    row.forEach((div) => {
      let sf5_det = div.querySelector(".sf5_det");
      let sf5_con = div.querySelector(".sf5_con");
      if (sf5_det) sf5_det.style.height = `${maxHeight}px`;
      if (sf5_con) sf5_con.style.height = `${maxHeight}px`;
    });
  });
}

//onload updateProjects
document.addEventListener("DOMContentLoaded", function () {
  updateProjects(false, 'all');
});
window.addEventListener(
  "resize",
  function (event) {
    if (isMobile) {
      projectsPerPage = 3;
      projectsPerRow = 1;
    }
    //if tablet, projectsPerPage = 6
    else if (isTablet) {
      projectsPerPage = 6;
      projectsPerRow = 2;
    } else {
      // Desktop
      projectsPerRow = 3;
      projectsPerPage = 9;
    }
    updateProjects(false);
  },
  true
);
