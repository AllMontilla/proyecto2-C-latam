let nav = document.querySelector("#nav");
let open = document.querySelector("#open");
let close = document.querySelector("#close");

open.addEventListener("click", () => {
    nav.classList.add("visible");
})

close.addEventListener("click", () => {
    nav.classList.remove("visible");
})

function downloadFile() {
    setTimeout(function() {
      let fileUrl = '/docs/MiCV.pdf';
      let link = document.createElement('a');
      link.href = fileUrl;
      link.download = 'MiCV.pdf';

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);
    }, 500); 
  }