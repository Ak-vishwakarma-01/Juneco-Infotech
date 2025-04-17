const wishes = {
    birthday: [
      "Happy Birthday! Wishing you a wonderful year ahead.",
      "May your birthday be filled with joy and laughter!",
      "Cheers to you on your special day. Happy Birthday!"
    ],
    anniversary: [
      "Happy Anniversary! Wishing you many more years of love.",
      "Congratulations on your anniversary!",
      "May your bond grow stronger with each passing year."
    ],
    newyear: [
      "Happy New Year! May your year be filled with happiness.",
      "Wishing you a prosperous and joyful New Year!",
      "Cheers to new beginnings! Happy New Year!"
    ]
  };

  // Navigation
  function nextPage(num) {
    for (let i = 1; i <= 4; i++) {
      document.getElementById('page' + i).classList.add('hidden');
    }
    document.getElementById('page' + num).classList.remove('hidden');
  }

  // Save Contact
  let contact = { countryCode: '', number: '' };
  function saveContact() {
    const code = document.getElementById('countryCode').value;
    const number = document.getElementById('contactNumber').value.trim();
    if (number.length < 6) {
      alert('Enter a valid contact number.');
      return;
    }
    contact = { countryCode: code, number: number };
    nextPage(3);
  }

  // Save Occasion
  let selectedOccasion = '';
  function saveOccasion() {
    const occ = document.getElementById('occasion').value;
    if (!occ) {
      alert('Please select an occasion.');
      return;
    }
    selectedOccasion = occ;
    showWishes();
    nextPage(4);
  }

  // Show Wishes
  function showWishes() {
    const options = wishes[selectedOccasion] || [];
    const wishDiv = document.getElementById('wishOptions');
    wishDiv.innerHTML = '';
    options.forEach(msg => {
      const btn = document.createElement('button');
      btn.className = "wish-btn";
      btn.innerText = msg;
      btn.onclick = () => sendWhatsApp(msg);
      wishDiv.appendChild(btn);
    });
  }

  // Open WhatsApp
  function sendWhatsApp(message) {
    // Remove "+" for WhatsApp link
    const phone = contact.countryCode.replace('+', '') + contact.number;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }