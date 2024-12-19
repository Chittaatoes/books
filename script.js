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
    const paxDropdown = document.querySelector("#rehearsal-form select");

    // Fungsi untuk mengganti isi dropdown pax berdasarkan kategori
    function updatePaxDropdown(category) {
        paxDropdown.innerHTML = ""; // Kosongkan dropdown

        if (category === "minusOne") {
            // Tambahkan opsi untuk minus one drum/guitar
            const option = document.createElement("option");
            option.textContent = "1 orang";
            paxDropdown.appendChild(option);
        } else {
            // Tambahkan opsi untuk kategori lain (default)
            ["1 - 2 orang", "3 - 5 orang", "6 - 7 orang"].forEach(optionText => {
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
                updatePaxDropdown("minusOne");
                break;
            default:
                updatePaxDropdown("default");
        }
    });

    // Panggil updatePaxDropdown untuk mengatur dropdown awal
    updatePaxDropdown("default");
});
