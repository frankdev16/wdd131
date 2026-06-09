const movies = [
    {
        title: "Interstellar",
        category: "space",
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival. Time dilation plays a massive role.",
        imageUrl: "images/interstellar.webp" 
    },
    {
        title: "Inception",
        category: "time", 
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea.",
        imageUrl: "images/inception.webp"
    },
    {
        title: "The Martian",
        category: "space",
        description: "An astronaut becomes stranded on Mars after his team assumes him dead, and must rely on his ingenuity to find a way to signal to Earth.",
        imageUrl: "images/the-martian.webp"
    },
    {
        title: "Tenet",
        category: "time",
        description: "A secret agent learns to manipulate the flow of time to prevent an attack from the future that threatens to annihilate the present.",
        imageUrl: "images/tenet.webp"
    },
    {
        title: "The Matrix",
        category: "simulation",
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        imageUrl: "images/the-matrix.webp"
    },
    {
        title: "Arrival",
        category: "alien",
        description: "A linguistics professor works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.",
        imageUrl: "images/arrival.webp"
    }
];


const gallery = document.getElementById("movie-gallery");

function renderMovies(movieArray) {
    if (!gallery) return;
    gallery.innerHTML = "";

    movieArray.forEach(movie => {
        const movieCard = `
            <div class="movie-card">
                <img src="${movie.imageUrl}" alt="Poster for ${movie.title}" loading="lazy">
                <h3>${movie.title}</h3>
                <p>${movie.description}</p>
            </div>
        `;
        gallery.innerHTML += movieCard;
    });
}

renderMovies(movies);


function filterMovies(category) {
    if (category === "all") {
        renderMovies(movies);
    } else {
        const filtered = movies.filter(movie => movie.category === category);
        renderMovies(filtered);
    }
}

const yearSpan = document.getElementById("currentYear");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

const btnAll = document.getElementById("btn-all");
const btnTime = document.getElementById("btn-time");
const btnSpace = document.getElementById("btn-space");
const btnSim = document.getElementById("btn-sim");
const btnAlien = document.getElementById("btn-alien");

if (btnAll) {
    btnAll.addEventListener("click", () => filterMovies("all"));
    btnTime.addEventListener("click", () => filterMovies("time"));
    btnSpace.addEventListener("click", () => filterMovies("space"));
    btnSim.addEventListener("click", () => filterMovies("simulation"));
    btnAlien.addEventListener("click", () => filterMovies("alien"));
}

// ==========================================
// FORM SUBMISSION & LOCAL STORAGE (Criterion 8 & 15)
// ==========================================
const requestForm = document.getElementById("request-form");
const savedMovieSpan = document.getElementById("saved-movie");
const recentRequestArea = document.getElementById("recent-request-area");

if (recentRequestArea && savedMovieSpan) {
    const previousRequest = window.localStorage.getItem("requestedMovie");
    if (previousRequest) {

        savedMovieSpan.textContent = previousRequest;
        recentRequestArea.style.display = "block";
    }
}

if (requestForm) {
    requestForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const movieInput = document.getElementById("movieTitle").value;

        window.localStorage.setItem("requestedMovie", movieInput);
 
        savedMovieSpan.textContent = movieInput;
        recentRequestArea.style.display = "block";

        requestForm.reset();
    });
}

// ==========================================
// LIGHT / DARK MODE TOGGLE 
// ==========================================
const themeToggle = document.getElementById("theme-toggle");

const currentTheme = window.localStorage.getItem("theme");

if (currentTheme === "light") {
    document.body.classList.add("light-mode");
    if (themeToggle) themeToggle.textContent = "🌙 Dark Mode";
}

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        // Toggle the class on the body
        document.body.classList.toggle("light-mode");
        
        // save user their choice
        if (document.body.classList.contains("light-mode")) {
            themeToggle.textContent = "🌙 Dark Mode";
            window.localStorage.setItem("theme", "light");
        } else {
            themeToggle.textContent = "☀️ Light Mode";
            window.localStorage.setItem("theme", "dark"); 
        }
    });
}