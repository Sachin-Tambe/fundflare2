// Simulate data for featured campaigns
const featuredCampaigns = [
    { title: "Empower Education: Bright Futures for All", description: "A campaign focused on providing resources for educational growth and innovation.", image: "A.jpg" },
    { title: "GreenTech Revolution: Building a Sustainable Tomorrow", description: "Supporting eco-friendly innovations to combat climate change and promote green technology.", image: "B.jpg" },
    { title: "StartUp Spark: Turning Ideas into Impactful Ventures", description: "Helping entrepreneurs kickstart their groundbreaking ideas with community-driven funding.", image: "C.jpg" }
];

// Dynamically load featured campaigns
function loadFeaturedCampaigns() {
    const container = document.getElementById('featuredCampaigns');
    featuredCampaigns.forEach(campaign => {
        const campaignCard = document.createElement('div');
        campaignCard.className = 'campaign-card';
        campaignCard.innerHTML = `
            <img src="${campaign.image}" alt="${campaign.title}">
            <h3>${campaign.title}</h3>
            <p>${campaign.description}</p>
            <a href="campaign-detail.html" class="btn">View Details</a>
        `;
        container.appendChild(campaignCard);
    });
}

// Initialize page content
document.addEventListener('DOMContentLoaded', loadFeaturedCampaigns);


// Simulate data for campaigns
const campaigns = [
    { title: "Empowering Tomorrow: Building AI Solutions for a Sustainable Future", category: "tech", description: "Innovative tech project", image: "D.jpg" },
    { title: "Heart to Heart: Advancing Cardiovascular Treatment Research", category: "health", description: "Health and wellness project", image: "F.jpg" },
    { title: "Bridging the Gap: Access to Quality STEM Education for Rural Youth", category: "education", description: "Educational initiative", image: "K.jpg" },
    { title: "Revolutionizing Accessibility: The Smart Tech for All Initiative", category: "tech", description: "Next-gen tech startup", image: "E.jpg" },
    { title: "The Wellness Project: Bringing Mental Health Care to Underserved Communities", category: "health", description: "Community health project", image: "I.jpg" }
];

// Function to display campaigns dynamically
function displayCampaigns(campaignsToDisplay) {
    const campaignGrid = document.getElementById('campaignGrid');
    campaignGrid.innerHTML = ''; // Clear existing campaigns
    campaignsToDisplay.forEach(campaign => {
        const campaignCard = document.createElement('div');
        campaignCard.className = 'campaign-card';
        campaignCard.innerHTML = `
            <img src="${campaign.image}" alt="${campaign.title}">
            <h3>${campaign.title}</h3>
            <p>${campaign.description}</p>
            <a href="campaign-detail.html" class="btn">View Details</a>
        `;
        campaignGrid.appendChild(campaignCard);
    });
}

// Function to handle search and filter
function handleSearchAndFilter() {
    const searchQuery = document.getElementById('searchBar').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;

    const filteredCampaigns = campaigns.filter(campaign => {
        const matchesSearch = campaign.title.toLowerCase().includes(searchQuery);
        const matchesCategory = category === 'all' || campaign.category === category;
        return matchesSearch && matchesCategory;
    });

    displayCampaigns(filteredCampaigns);
}

// Initialize page content
document.addEventListener('DOMContentLoaded', () => {
    // Display all campaigns initially
    displayCampaigns(campaigns);

    // Add event listeners for search and filter
    document.getElementById('searchBar').addEventListener('input', handleSearchAndFilter);
    document.getElementById('categoryFilter').addEventListener('change', handleSearchAndFilter);
});

// Simulated campaign data
const campaignData = {
    title: "Innovative Tech Project",
    description: "This project aims to revolutionize the tech industry with groundbreaking innovations.",
    fundingGoal: 10000,
    fundsRaised: 0,
    image: "R.jpg"
};

// Initialize the campaign detail page
document.addEventListener("DOMContentLoaded", () => {
    // Populate the page with campaign data
    document.getElementById("campaignTitle").textContent = campaignData.title;
    document.getElementById("campaignDescription").textContent = campaignData.description;
    document.getElementById("campaignGoal").textContent = campaignData.fundingGoal;
    document.getElementById("fundsRaised").textContent = campaignData.fundsRaised;
    document.getElementById("campaignImage").src = campaignData.image;

    updateProgressBar();

    // Handle form submission
    document.getElementById("contributionForm").addEventListener("submit", (e) => {
        e.preventDefault();
        handleContribution();
    });
});

// Update the progress bar based on funds raised
function updateProgressBar() {
    const progressBar = document.getElementById("progressBar");
    const percentage = (campaignData.fundsRaised / campaignData.fundingGoal) * 100;
    progressBar.style.width = `${percentage}%`;
}

// Handle contribution form submission
function handleContribution() {
    const contributionAmount = parseFloat(document.getElementById("contributionAmount").value);

    if (!contributionAmount || contributionAmount <= 0) {
        alert("Please enter a valid contribution amount.");
        return;
    }

    // Update funds raised
    campaignData.fundsRaised += contributionAmount;

    // Update the UI
    document.getElementById("fundsRaised").textContent = campaignData.fundsRaised;
    updateProgressBar();

    // Display success message
    const contributionMessage = document.getElementById("contributionMessage");
    contributionMessage.textContent = `Thank you for your contribution of $${contributionAmount}!`;
    setTimeout(() => {
        contributionMessage.textContent = ""; // Clear message after 3 seconds
    }, 3000);

    // Reset the form
    document.getElementById("contributionForm").reset();
}

// Mock data for user contributions
const userContributions = [
    { campaign: "Innovative Tech Project", amount: 200, status: "Active" },
    { campaign: "Green Energy Initiative", amount: 150, status: "Completed" }
];

// Mock data for user campaigns
const userCampaigns = [
    { 
        title: "Smart Home Revolution", 
        description: "Transforming homes with cutting-edge smart technologies.",
        image: "A.jpg",
        fundsRaised: 5000,
        fundingGoal: 10000
    },
    { 
        title: "Sustainable Agriculture", 
        description: "Promoting eco-friendly farming practices.",
        image: "C.jpg",
        fundsRaised: 3000,
        fundingGoal: 8000
    }
];

// Populate contributions table
function loadContributions() {
    const contributionsTableBody = document.querySelector("#contributionsTable tbody");
    contributionsTableBody.innerHTML = ""; // Clear existing rows

    userContributions.forEach(contribution => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${contribution.campaign}</td>
            <td>$${contribution.amount}</td>
            <td>${contribution.status}</td>
        `;
        contributionsTableBody.appendChild(row);
    });
}

// Populate campaigns container with campaign cards
function loadCampaigns() {
    const campaignsContainer = document.getElementById("campaignsContainer");
    campaignsContainer.innerHTML = ""; // Clear existing cards

    userCampaigns.forEach(campaign => {
        const campaignCard = document.createElement("div");
        campaignCard.classList.add("campaign-card");
        campaignCard.innerHTML = `
            <img src="${campaign.image}" alt="${campaign.title}">
            <h3>${campaign.title}</h3>
            <p>${campaign.description}</p>
            <p><strong>Funds Raised:</strong> $${campaign.fundsRaised} / $${campaign.fundingGoal}</p>
            <div class="progress-bar-container">
                <div class="progress-bar" style="width: ${(campaign.fundsRaised / campaign.fundingGoal) * 100}%;"></div>
            </div>
        `;
        campaignsContainer.appendChild(campaignCard);
    });
}

// Initialize dashboard
document.addEventListener("DOMContentLoaded", () => {
    loadContributions();
    loadCampaigns();
});

// Initialize contact form
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    const formResponse = document.getElementById("formResponse");

    // Handle form submission
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // Collect form data
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validate fields
        if (!name || !email || !message) {
            alert("All fields are required. Please fill out the form.");
            return;
        }

        // Simulate sending the message
        setTimeout(() => {
            formResponse.textContent = `Thank you, ${name}! Your message has been sent successfully.`;
            formResponse.style.display = "block";

            // Clear the form
            contactForm.reset();
        }, 500);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const campaignsContainer = document.getElementById("campaignsContainer");

    // Fetch campaigns from localStorage
    const campaigns = JSON.parse(localStorage.getItem("campaigns")) || [];

    // Display campaigns dynamically
    campaigns.forEach((campaign) => {
        const campaignCard = document.createElement("div");
        campaignCard.classList.add("campaign-card");
        campaignCard.innerHTML = `
            <img src="${campaign.image}" alt="${campaign.title}">
            <h3>${campaign.title}</h3>
            <p>${campaign.description}</p>
            <p><strong>Goal:</strong> $${campaign.goal}</p>
        `;
        campaignsContainer.appendChild(campaignCard);
    });
});
