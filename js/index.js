(function() {
  let videoControl = document.querySelectorAll(".vid-controls");
  let videos = document.querySelectorAll(".video");
  let page = document.querySelectorAll(".page");
  let pauseIcon = document.querySelectorAll(`ion-icon[name="pause"]`);
  let playIcon = document.querySelectorAll(`ion-icon[name="play"]`);
  
  
  
  videoControl.forEach((elem,i)=>{
        elem.addEventListener("click",()=>{
        if (videos[i].hasAttribute("autoplay")==false) {
          videos[i].play();
            pauseIcon[i].style.display = 'block';
            playIcon[i].style.display = "none";
          videos[i].setAttribute('autoplay',"");
        } else {
          videos[i].pause();
            pauseIcon[i].style.display = 'none';
            playIcon[i].style.display = "block";
            videos[i].removeAttribute("autoplay");
        }
        });
  });
})();


//loading javascript
const loading = ()=>{
  let heroImage = document.getElementById("heroImg");
  let heroVisionImg = document.querySelector(".hero>img");
  heroImage.style.opacity = 1;
  heroImage.style.transform = 'translateY(0%)';
  heroVisionImg.style.opacity = 1;
  heroVisionImg.style.transform = 'translateY(0%)';
}
/*》》》》》》》》》》》》》》》》》》》》》》》》
  page1 Section Javascript
《《《《《《《《《《《《《《《《《《《《《《《《《*/
