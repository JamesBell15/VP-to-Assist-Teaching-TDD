function showBanner(){
  let banner = document.getElementById("banner");
  banner.classList.add("active");
  setTimeout(function(){
    banner.classList.remove("active");
  },2500);

  return false;
}