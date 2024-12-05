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
    const historyBtn = document.getElementById('history-btn');

    historyBtn.classList.add("bg-lime-300");
    historyBtn.classList.add("hover:bg-lime-400");
    historyBtn.classList.remove("btn-outline");

    donationBtn.classList.remove("bg-lime-300");
    donationBtn.classList.remove("hover:bg-lime-400");
    donationBtn.classList.add("btn-outline");
})

// noakhali donate button function

document.getElementById('noakhali-donate').addEventListener('click', function () {
    let amountOfDonation = parseFloat(document.getElementById('noakhali-input').value);
    let noakhaliDonation = parseFloat(document.getElementById('noakhali-donation').innerText);
    let totalBalance = parseFloat(document.getElementById('totalBalance').innerText);

    if (isNaN(amountOfDonation)) {
        alert('Please enter valid amount');
        document.getElementById('noakhali-input').value = "";
        return;
    }
    if (amountOfDonation > totalBalance) {
        alert("You don't have enough money");
        document.getElementById('noakhali-input').value = "";
        return;
    }
    if (amountOfDonation < 0) {
        alert("Please enter valid amount");
        document.getElementById('noakhali-input').value = "";
        return;
    }

    noakhaliDonation += amountOfDonation;
    document.getElementById('noakhali-donation').innerText = noakhaliDonation;
    totalBalance -= amountOfDonation;
    document.getElementById('totalBalance').innerText = totalBalance;
    document.getElementById('noakhali-input').value = "";
})

// feni donate button function 

document.getElementById('feni-donate').addEventListener('click', function () {
    console.log("button click");
    let amountOfDonation = parseFloat(document.getElementById('feni-input').value);
    let feniDonation = parseFloat(document.getElementById('feni-donation').innerText);
    let totalBalance = parseFloat(document.getElementById('totalBalance').innerText);

    if (isNaN(amountOfDonation)) {
        alert('Please enter valid amount');
        document.getElementById('feni-input').value = "";
        return;
    }
    if (amountOfDonation > totalBalance) {
        alert("You don't have enough money");
        document.getElementById('feni-input').value = "";
        return;
    }
    if (amountOfDonation < 0) {
        alert("Please enter valid amount");
        
        return;
    }
    feniDonation+=amountOfDonation;
    document.getElementById('feni-donation').innerText = feniDonation;
    totalBalance-=amountOfDonation;
    document.getElementById('totalBalance').innerText = totalBalance;
    document.getElementById('feni-input').value = "";
})


// quota protest button function

document.getElementById('quota-protest-donate').addEventListener('click', function () {
    console.log("button click");
    let amountOfDonation = parseFloat(document.getElementById('quota-amount-input').value);
    let quotaDonation = parseFloat(document.getElementById('quota-injured-donation').innerText);
    let totalBalance = parseFloat(document.getElementById('totalBalance').innerText);

    if (isNaN(amountOfDonation)) {
        alert('Please enter valid amount');
        document.getElementById('quota-amount-input').value = "";
        return;
    }
    if (amountOfDonation > totalBalance) {
        alert("You don't have enough money");
        document.getElementById('feni-input').value = "";
        return;
    }
    if (amountOfDonation < 0) {
        alert("Please enter valid amount");
        
        return;
    }
    quotaDonation+=amountOfDonation;
    document.getElementById('quota-injured-donation').innerText = quotaDonation;
    totalBalance-=amountOfDonation;
    document.getElementById('totalBalance').innerText = totalBalance;
    document.getElementById('quota-amount-input').value = "";
})