function displayTime() {
    const timeElement = document.getElementById('current-time');
    const now = new Date();
    timeElement.textContent = now.toLocaleTimeString();
  }
  
  displayTime();
  setInterval(displayTime, 1000);

  function displayTime() {
    const timeElement = document.getElementById('current-time');
    const now = new Date();
    timeElement.textContent = now.toLocaleTimeString();
  
    // Ubah warna teks berdasarkan waktu
    const hours = now.getHours();
    let color;
  
    if (hours >= 6 && hours < 12) {
      color = 'green'; // Pagi
    } else if (hours >= 12 && hours < 18) {
      color = 'blue'; // Siang
    } else {
      color = 'purple'; // Malam
    }
  
    timeElement.style.color = color;
  }
  
  displayTime();
  setInterval(displayTime, 1000);

  const timeElement = document.getElementById('current-time');
timeElement.style.fontSize = '40px';