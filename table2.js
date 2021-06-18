function getinfo2() {
    var ifrm = document.createElement("iframe");
     ifrm.setAttribute("src", "https://docs.google.com/forms/d/e/1FAIpQLSfFKoGI6MJyA2en4Hw8BrHc-2SxGB3Hu-nwNgQVBRAGO0NLoA/viewform?embedded=true");
     ifrm.style.width = "350px";
     ifrm.style.height = "720px";
    document.body.appendChild(ifrm);
}
