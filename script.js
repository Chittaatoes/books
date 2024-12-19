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
    const dateInput = document.getElementById("date-input");

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

        // Optional: Display placeholder text manually if the field is empty
        dateInput.addEventListener("focus", () => {
            dateInput.setAttribute("placeholder", "");
        });

        dateInput.addEventListener("blur", () => {
            if (!dateInput.value) {
                dateInput.setAttribute("placeholder", "Pilih tanggal book");
            }
        });

        // Prevent manual input
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



    
