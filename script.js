/* (Untuk Carousel Review dan Gallery) */
const reviewTrack = document.querySelector('.carousel-track');
const reviewSlides = Array.from(reviewTrack.children);
let currentReviewSlideIndex = 0;
let isReviewAnimating = false;

function moveToNextReviewSlide() {
    if (isReviewAnimating) return; // Prevent overlapping animations
    isReviewAnimating = true;

    const slideWidth = reviewSlides[0].getBoundingClientRect().width;

    if (currentReviewSlideIndex === reviewSlides.length - 1) {
        const firstReviewSlideClone = reviewSlides[0].cloneNode(true);
        reviewTrack.appendChild(firstReviewSlideClone);

        const newTransformValue = -currentReviewSlideIndex * slideWidth;
        reviewTrack.style.transition = 'transform 0.5s ease-in-out';
        reviewTrack.style.transform = `translateX(${newTransformValue - slideWidth}px)`;

        setTimeout(() => {
            reviewTrack.style.transition = 'none';
            reviewTrack.style.transform = 'translateX(0)';
            reviewTrack.removeChild(firstReviewSlideClone);
            isReviewAnimating = false;
        }, 500);

        currentReviewSlideIndex = 0;
    } else {
        currentReviewSlideIndex++;
        const newTransformValue = -currentReviewSlideIndex * slideWidth;
        reviewTrack.style.transition = 'transform 0.5s ease-in-out';
        reviewTrack.style.transform = `translateX(${newTransformValue}px)`;

        setTimeout(() => {
            isReviewAnimating = false;
        }, 500);
    }
}

// Automatically move to the next review slide every 3 seconds
setInterval(moveToNextReviewSlide, 3000);



/* JavaScript untuk Carousel Gallery: */
const galleryTrack = document.querySelector('.customer-carousel-track');
const gallerySlides = Array.from(galleryTrack.children);
let currentGallerySlideIndex = 0;
let isGalleryAnimating = false;

function moveToNextGallerySlide() {
    if (isGalleryAnimating) return; // Prevent overlapping animations
    isGalleryAnimating = true;

    const slideWidth = gallerySlides[0].getBoundingClientRect().width;

    if (currentGallerySlideIndex === gallerySlides.length - 1) {
        const firstGallerySlideClone = gallerySlides[0].cloneNode(true);
        galleryTrack.appendChild(firstGallerySlideClone);

        const newTransformValue = -currentGallerySlideIndex * slideWidth;
        galleryTrack.style.transition = 'transform 0.5s ease-in-out';
        galleryTrack.style.transform = `translateX(${newTransformValue - slideWidth}px)`;

        setTimeout(() => {
            galleryTrack.style.transition = 'none';
            galleryTrack.style.transform = 'translateX(0)';
            galleryTrack.removeChild(firstGallerySlideClone);
            isGalleryAnimating = false;
        }, 500);

        currentGallerySlideIndex = 0;
    } else {
        currentGallerySlideIndex++;
        const newTransformValue = -currentGallerySlideIndex * slideWidth;
        galleryTrack.style.transition = 'transform 0.5s ease-in-out';
        galleryTrack.style.transform = `translateX(${newTransformValue}px)`;

        setTimeout(() => {
            isGalleryAnimating = false;
        }, 500);
    }
}

// Automatically move to the next gallery slide every 3 seconds
setInterval(moveToNextGallerySlide, 5000);


document.addEventListener("DOMContentLoaded", function () {
    // Select the card element
    const card = document.querySelector('.card');

    // Wait for the fadeInUp animation to end before starting customer number and star rating animations
    card.addEventListener('animationend', function () {
        // Animate the customer count from 0 to 50+
        let customerNumber = document.getElementById("customer-number");
        let customerCount = 0;
        let targetCount = 50;

        let countInterval = setInterval(function () {
            if (customerCount < targetCount) {
                customerCount++;
                customerNumber.innerText = customerCount;
            } else {
                clearInterval(countInterval);
                // Once the customer count is complete, start the star rating animation
                animateStarRating();
            }
        }, 50); // Increment every 100ms
    });

    // Function to animate the star rating
    function animateStarRating() {
        // Animate the star rating from 0 to 5 stars
        let stars = document.querySelectorAll('.star');
        let rating = 5; // Rating is 5 stars
        let currentStar = 0;

        let starInterval = setInterval(function () {
            if (currentStar < rating) {
                stars[currentStar].classList.add('active'); // Add the 'active' class to make the star yellow
                currentStar++;
            } else {
                clearInterval(starInterval);
            }
        }, 1000); // Add one star every 500ms
    }
});





document.addEventListener("DOMContentLoaded", function () {
    const buttonGroup = document.querySelector(".booking-form .button-group");
    let isDragging = false;
    let startX;
    let scrollLeft;

    // Mouse events
    buttonGroup.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.pageX - buttonGroup.offsetLeft;
        scrollLeft = buttonGroup.scrollLeft;
    });

    buttonGroup.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - buttonGroup.offsetLeft;
        const walk = (x - startX) * 2; // Speed of scrolling
        buttonGroup.scrollLeft = scrollLeft - walk;
    });

    buttonGroup.addEventListener("mouseup", () => (isDragging = false));
    buttonGroup.addEventListener("mouseleave", () => (isDragging = false));

    // Touch events for mobile
    buttonGroup.addEventListener("touchstart", (e) => {
        isDragging = true;
        startX = e.touches[0].pageX - buttonGroup.offsetLeft;
        scrollLeft = buttonGroup.scrollLeft;
    });

    buttonGroup.addEventListener("touchmove", (e) => {
        if (!isDragging) return;
        const x = e.touches[0].pageX - buttonGroup.offsetLeft;
        const walk = (x - startX) * 2; // Speed of scrolling
        buttonGroup.scrollLeft = scrollLeft - walk;
    });

    buttonGroup.addEventListener("touchend", () => (isDragging = false));
    buttonGroup.addEventListener("touchcancel", () => (isDragging = false));

    // Handle active button state
    const buttons = buttonGroup.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            buttons.forEach((btn) => btn.classList.remove("active"));
            this.classList.add("active");
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const dateInput = document.querySelector('input[type="date"]');

    if (dateInput) {
        // Get today's date
        const today = new Date();
        
        // Calculate the maximum allowed date (8 days from today)
        const maxDate = new Date(today);
        maxDate.setDate(today.getDate() + 8);

        // Format the date to YYYY-MM-DD
        const formattedToday = today.toISOString().split("T")[0];
        const formattedMaxDate = maxDate.toISOString().split("T")[0];

        // Set min and max attributes
        dateInput.setAttribute("min", formattedToday);
        dateInput.setAttribute("max", formattedMaxDate);

        // Optional: Prevent manual input
        dateInput.addEventListener("keydown", (e) => e.preventDefault());
    }
});



document.addEventListener("DOMContentLoaded", () => {
    const rehearsalBtn = document.getElementById("rehearsal-btn");
    const masteringBtn = document.getElementById("mastering-btn");

    const rehearsalForm = document.getElementById("rehearsal-form");
    const masteringForm = document.getElementById("mastering-form");

    const rehearsalDropdown = document.getElementById("rehearsal-dropdown");
    const timeDropdown = document.getElementById("time-dropdown");
    const bandNameInput = document.getElementById("band-name");

    // Fungsi untuk menampilkan form Rehearsal secara default saat halaman dimuat
    function showRehearsalForm() {
        // Tampilkan form rehearsal dan sembunyikan form mastering
        rehearsalForm.style.display = "block";
        masteringForm.style.display = "none";
        
        // Tampilkan elemen yang terkait dengan Rehearsal
        rehearsalDropdown.style.display = "block";
        timeDropdown.style.display = "block";
        bandNameInput.style.display = "block";
        
        // Sembunyikan elemen terkait Mastering
        masteringForm.style.display = "none";
        
        // Ubah status tombol aktif
        rehearsalBtn.classList.add("active");
        masteringBtn.classList.remove("active");
    }

    // Fungsi untuk menampilkan form Mastering
    function showMasteringForm() {
        // Sembunyikan form rehearsal dan tampilkan form mastering
        rehearsalForm.style.display = "none";
        masteringForm.style.display = "block";
        
        // Sembunyikan elemen terkait Rehearsal
        rehearsalDropdown.style.display = "none";
        timeDropdown.style.display = "none";
        bandNameInput.style.display = "none";
        
        // Tampilkan elemen terkait Mastering
        masteringForm.style.display = "block";
        
        // Ubah status tombol aktif
        rehearsalBtn.classList.remove("active");
        masteringBtn.classList.add("active");
    }

    // Panggil fungsi untuk menampilkan form Rehearsal secara default
    showRehearsalForm();

    // Mengatur event listener untuk tombol
    rehearsalBtn.addEventListener("click", () => {
        showRehearsalForm();
    });

    masteringBtn.addEventListener("click", () => {
        showMasteringForm();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const timeGroup = document.querySelector('.time-group'); // Grup tombol waktu
    const timeButtons = timeGroup.querySelectorAll('button'); // Semua tombol dalam grup waktu

    // Fungsi untuk menangani klik pada tombol waktu
    timeButtons.forEach((button) => {
        button.addEventListener("click", function () {
            // Hapus kelas "active" dari semua tombol waktu
            timeButtons.forEach((btn) => btn.classList.remove("active"));
            
            // Tambahkan kelas "active" pada tombol yang dipilih
            this.classList.add("active");
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const timeGroup = document.querySelector('.time-group'); // Grup tombol waktu
    const timeButtons = timeGroup.querySelectorAll('button'); // Semua tombol dalam grup waktu

    // Fungsi untuk menangani klik pada tombol waktu
    timeButtons.forEach((button) => {
        button.addEventListener("click", function (event) {
            // Mencegah form atau halaman refresh saat tombol diklik
            event.preventDefault();

            // Hapus kelas "active" dari semua tombol waktu
            timeButtons.forEach((btn) => btn.classList.remove("active"));
            
            // Tambahkan kelas "active" pada tombol yang dipilih
            this.classList.add("active");
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const rehearsalDropdown = document.getElementById("rehearsal-dropdown");
    const timeDropdown = document.getElementById("time-dropdown");

    // Data untuk setiap kategori
    const timeOptions = {
        rehearsal: [
            "1 Jam (Rp 60.000)",
            "2 Jam (Rp 120.000)",
            "3 Jam (Rp 170.000)",
            "4 Jam (Rp 240.000)",
            "5 Jam (Rp 300.000)"
        ],
        minusOneDrum: [
            "1 Jam (Rp 50.000)",
            "2 Jam (Rp 100.000)",
            "3 Jam (Rp 150.000)"
        ],
        minusOneGuitar: [
            "1 Jam (Rp 50.000)",
            "2 Jam (Rp 100.000)",
            "3 Jam (Rp 150.000)"
        ],
        karaoke: [
            "1 Jam (Rp 55.000)",
            "2 Jam (Rp 110.000)",
            "3 Jam (Rp 160.000)"
        ]
    };

    // Fungsi untuk memperbarui isi dropdown waktu berdasarkan kategori
    function updateTimeDropdown(category) {
        timeDropdown.innerHTML = ""; // Kosongkan dropdown

        if (timeOptions[category]) {
            timeOptions[category].forEach(option => {
                const opt = document.createElement("option");
                opt.textContent = option;
                timeDropdown.appendChild(opt);
            });

            timeDropdown.style.display = "block"; // Tampilkan dropdown
        } else {
            timeDropdown.style.display = "none"; // Sembunyikan dropdown jika tidak ada opsi
        }
    }

    // Event listener untuk perubahan pada dropdown Rehearsal
    rehearsalDropdown.addEventListener("change", (e) => {
        const selectedOption = e.target.value;

        switch (selectedOption) {
            case "Rehearsal":
                updateTimeDropdown("rehearsal");
                break;
            case "Rehearsal minus one drum":
                updateTimeDropdown("minusOneDrum");
                break;
            case "Rehearsal minus one guitar":
                updateTimeDropdown("minusOneGuitar");
                break;
            case "Karaoke":
                updateTimeDropdown("karaoke");
                break;
            default:
                timeDropdown.style.display = "none"; // Sembunyikan dropdown jika kategori tidak dikenal
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const bookNowButton = document.querySelector(".submit-btn");
    const rehearsalDropdown = document.getElementById("rehearsal-dropdown");
    const timeDropdown = document.getElementById("time-dropdown");
    const bandNameInput = document.getElementById("band-name");
    const dateInput = document.getElementById("date-input");
    const paxDropdown = document.querySelector("#rehearsal-form select");

    // Function to handle booking process
    bookNowButton.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent form submission

        // Get input values
        const rehearsalOption = rehearsalDropdown.value;
        const timeOption = timeDropdown.value;
        const bandName = bandNameInput.value.trim();
        const bookingDate = dateInput.value;
        const pax = paxDropdown.value;
        const selectedTimeButton = document.querySelector("#rehearsal-form .time-group button.active");

        // Validate form fields
        if (!rehearsalOption || !timeOption || !bandName || !bookingDate || !pax || !selectedTimeButton) {
            alert("Harap isi semua bidang formulir!");
            return;
        }

        const bookingTime = selectedTimeButton.textContent; // Get the selected time

        // Format WhatsApp message
        const message = `
Halo kak Joel, saya ingin booking studio untuk keperluan:
*${rehearsalOption}*
*${timeOption}*
Untuk tanggal: ${bookingDate}
Pada jam: ${bookingTime}
Untuk sekitar: ${pax}
Nama: ${bandName}

Apakah waktu tersebut tersedia?
        `;

        // Send message to WhatsApp
        const whatsappURL = `https://wa.me/628991601137?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, "_blank");
    });

    // Add event listener to time buttons
    const timeButtons = document.querySelectorAll("#rehearsal-form .time-group button");
    timeButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove active class from all buttons
            timeButtons.forEach(btn => btn.classList.remove("active"));
            // Add active class to the clicked button
            button.classList.add("active");
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const rehearsalDropdown = document.getElementById("rehearsal-dropdown");
    const paxDropdown = document.querySelector("#rehearsal-form select"); // Dropdown untuk jumlah orang

    // Fungsi untuk memperbarui isi dropdown pax
    function updatePaxDropdown(category) {
        paxDropdown.innerHTML = ""; // Kosongkan dropdown

        if (category === "Rehearsal minus one drum" || category === "Rehearsal minus one guitar") {
            // Opsi khusus untuk "minus one drum" atau "minus one guitar"
            const option = document.createElement("option");
            option.textContent = "1 orang";
            paxDropdown.appendChild(option);
        } else if (category === "Karaoke") {
            // Opsi khusus untuk "Karaoke" (tanpa opsi 6-7 orang)
            const options = ["1 - 2 orang", "3 - 5 orang"];
            options.forEach(optionText => {
                const option = document.createElement("option");
                option.textContent = optionText;
                paxDropdown.appendChild(option);
            });
        } else {
            // Default opsi untuk kategori lainnya
            const options = ["1 - 2 orang", "3 - 5 orang", "6 - 7 orang"];
            options.forEach(optionText => {
                const option = document.createElement("option");
                option.textContent = optionText;
                paxDropdown.appendChild(option);
            });
        }
    }

    // Event listener untuk perubahan pada dropdown Rehearsal
    rehearsalDropdown.addEventListener("change", (e) => {
        const selectedOption = e.target.value;

        switch (selectedOption) {
            case "Rehearsal minus one drum":
            case "Rehearsal minus one guitar":
                updatePaxDropdown(selectedOption);
                break;
            case "Karaoke":
                updatePaxDropdown("Karaoke");
                break;
            default:
                updatePaxDropdown("default");
        }
    });
});
