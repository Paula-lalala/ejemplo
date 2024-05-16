document.addEventListener("DOMContentLoaded", function() {
    const downloadBtn = document.getElementById("download-btn");
    const modal = document.getElementById("myModal");
  
    downloadBtn.addEventListener("click", function() {
      // Mostrar el modal
      modal.style.display = "block";
  
      // Iniciar la descarga simulada
      simulateDownload();
    });
  
    function simulateDownload() {
      const progressBar = document.createElement("div");
      progressBar.className = "progress-bar";
      progressBar.innerHTML = `<div class="progress-bar-fill"></div>`;
      modal.querySelector(".modal-content").appendChild(progressBar);
  
      const progressText = document.createElement("div");
      progressText.className = "progress-text";
      progressText.textContent = "Descargando...";
      modal.querySelector(".modal-content").appendChild(progressText);
  
      let progress = 0;
      const totalTime = 5000; // Duración total de la descarga en milisegundos
      const interval = totalTime / 100;
  
      const downloadInterval = setInterval(function() {
        progress += 1;
        progressBar.querySelector(".progress-bar-fill").style.width = progress + "%";
        progressText.textContent = `Descargando... ${progress}%`;
  
        if (progress >= 100) {
          clearInterval(downloadInterval);
          progressText.textContent = "¡Archivo descargado!";
          setTimeout(function() {
            modal.style.display = "none";
            modal.querySelector(".modal-content").removeChild(progressBar);
            modal.querySelector(".modal-content").removeChild(progressText);
          }, 2000);
        }
      }, interval);
    }
  });
  
  
  
  
  
  
  