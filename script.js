//Mecanismo do menu
function toggleSidebar() {  //função chamada toggleSidebar será executada quando o botão ☰ for clicado no HTML 
    const sidebar = document.getElementById("sidebar"); //pega um elemento HTML com o atributo

    // Alterna (liga/desliga) a classe "collapsed"
    // Se tiver, remove; se não tiver, adiciona
    sidebar.classList.toggle("collapsed");
}
