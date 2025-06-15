
document.addEventListener("DOMContentLoaded", () => {
    const btnler = document.querySelectorAll("#kıyasbtn");
  
    btnler.forEach((btn) => {
      btn.addEventListener("click", () => {
        alert("not usable yet");
      });
    });
  });
  
  let butonlar = document.getElementsByClassName("modelButton");

for (let i = 0; i < butonlar.length; i++) {
  butonlar[i].onclick = function() {
    alert("Bu motor seçildi: " + this.innerText);
  };
}
