document.getElementById('blog-btn').addEventListener('click', function () {
    window.location.href = "./blog.html";
})

// donation btn function

document.getElementById('donation-btn').addEventListener('click', function () {
    const donationSection = document.getElementById('donation-section');
    donationSection.classList.remove("hidden");

    const historySection = document.getElementById('history-section');
    historySection.classList.add("hidden");

    const donationBtn = document.getElementById('donation-btn');
    const historyBtn = document.getElementById('history-btn');

    donationBtn.classList.add("bg-lime-300");
    donationBtn.classList.add("hover:bg-lime-400");
    donationBtn.classList.remove("btn-outline");

    historyBtn.classList.remove("bg-lime-300");
    historyBtn.classList.remove("hover:bg-lime-400");
    historyBtn.classList.add("btn-outline");
})

// history btn function

document.getElementById('history-btn').addEventListener('click', function () {
    const donationSection = document.getElementById('donation-section');
    donationSection.classList.add("hidden");

    const historySection = document.getElementById('history-section');
    historySection.classList.remove("hidden");

    const donationBtn = document.getElementById('donation-btn');
    const historyBtn  = document.getElementById('history-btn');

    historyBtn.classList.add("bg-lime-300");
    historyBtn.classList.add("hover:bg-lime-400");
    historyBtn.classList.remove("btn-outline");

    donationBtn.classList.remove("bg-lime-300");
    donationBtn.classList.remove("hover:bg-lime-400");
    donationBtn.classList.add("btn-outline");
})


