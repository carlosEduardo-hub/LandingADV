const btnMobile = document.getElementById("btnMobile");

//Evento clique menu mobile
btnMobile.addEventListener("click", toggleMenu);

//função que adiciona ou elimina classe active no elemento html
function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

//função para transição vindo das laterias ao abrir aplicação

document.addEventListener("DOMContentLoaded", function () {
  var mainContainer = document.getElementById("mainContainer");
  var mainAbout = document.querySelector(".mainAbout");
  var formContactMain = document.querySelector(".formContactMain");

  mainAbout.style.opacity = 0;
  mainAbout.style.transform = "translateX(-50%)";
  formContactMain.style.opacity = 0;
  formContactMain.style.transform = "translateX(50%)";

  setTimeout(function () {
    mainAbout.style.opacity = 1;
    mainAbout.style.transform = "translateX(0)";
  }, 500); // Ajuste o tempo conforme necessário

  setTimeout(function () {
    formContactMain.style.opacity = 1;
    formContactMain.style.transform = "translateX(0)";
  }, 500); // Ajuste o tempo conforme necessário
});

// função para enviar mensagem para whatsApp pelos inputs
function sendwhatsapp(){
    var phonenumber = "+5586999743633";

    var name = document.querySelector("#inputNome1").value;
    var email = document.querySelector("#inputEmail1").value;
    var telefone = document.querySelector("#inputTel1").value;
    var assunto = document.querySelector("#inputAssunto1").value;
    var message = document.querySelector("#inputMsg1").value;

    var url = "https://wa.me/" + phonenumber + "?text="
    +"*Name :* "+name+"%0a"
    +"*Email :* "+email+"%0a"
    +"*telefone:* "+telefone+"%0a"
    +"*Assunto:* "+assunto+"%0a"
    +"*Menssagem :* "+message
    // +"%0a%0a"
    // +"This is an example of send HTML form data to WhatsApp";

    window.open(url, '_blank').focus();
  }

  function limparInputs() {
    // Selecione todos os inputs dentro do formulário
    var inputs = document.querySelectorAll('form input, form textarea');

    // Itera sobre os inputs e define o valor para vazio
    inputs.forEach(function(input) {
      input.value = '';
    });
  }


//Objeto mensagem do Form1
var mensagemForm1 = {};

//Evento clique no botão enviar
 document.getElementById("btnForm1").addEventListener("click", form1Received);

//Valida Campos, recebe a atribui no objeto mensagens
function form1Received() {

    let msg = document.getElementsByClassName("form1");

    if (msg[0].value == "" || msg[1].value == "" || msg[2].value == "" || msg[3].value == "" || msg[4].value == "" ) {

        if (msg[0].value == "") {
            msg[0].style.border = 'solid 2px red';
        }
        else {msg[0].style.border = 'none';}

        if (msg[1].value == "") {
            msg[1].style.border = 'solid 2px red';
        }
        else {msg[1].style.border = 'none';}

        if (msg[2].value == "") {
            msg[2].style.border = 'solid 2px red';
        }
        else {msg[2].style.border = 'none';}

        if (msg[3].value == "") {
            msg[3].style.border = 'solid 2px red';
        }
        else {msg[3].style.border = 'none';}

        if (msg[4].value == "") {
            msg[4].style.border = 'solid 2px red';
        }
        else {msg[4].style.border = 'none';}
    }

    if (msg[0].value != "" && msg[1].value != "" && msg[2].value != "" && msg[3].value != "" && msg[4].value != "" ) {

        mensagemForm1 = { nome: msg[0].value, email: msg[1].value, tel: msg[2].value, assunto: msg[3].value, msg: msg[4].value };

        document.getElementById("confirmaEnvio1").style.display = "block";
        document.getElementById("erroCampos1").style.display = "none";
        sendwhatsapp();
        limparInputs();

        msg[0].style.border = 'none';
        msg[1].style.border = 'none';
        msg[2].style.border = 'none';
        msg[3].style.border = 'none';
        msg[4].style.border = 'none';
        
        }
    else{
        console.log("Prencha todos os campos");
        document.getElementById("erroCampos1").style.display = "block";
        document.getElementById("confirmaEnvio1").style.display = "none";
    }
}

//Objeto mensagem do Form2
var mensagemForm2 = {};

//Evento clique no botão enviar
document.getElementById("btnForm2").addEventListener("click", form2Received);

//Valida Campos, recebe a atribui no objeto mensagens
function form2Received() {
  let msg = document.getElementsByClassName("form2");

  if (
    msg[0].value == "" ||
    msg[1].value == "" ||
    msg[2].value == "" ||
    msg[3].value == "" ||
    msg[4].value == ""
  ) {
    if (msg[0].value == "") {
      msg[0].style.border = "solid 2px red";
    } else {
      msg[0].style.border = "none";
    }

    if (msg[1].value == "") {
      msg[1].style.border = "solid 2px red";
    } else {
      msg[1].style.border = "none";
    }

    if (msg[2].value == "") {
      msg[2].style.border = "solid 2px red";
    } else {
      msg[2].style.border = "none";
    }

    if (msg[3].value == "") {
      msg[3].style.border = "solid 2px red";
    } else {
      msg[3].style.border = "none";
    }

    if (msg[4].value == "") {
      msg[4].style.border = "solid 2px red";
    } else {
      msg[4].style.border = "none";
    }
  }

  if (
    msg[0].value != "" &&
    msg[1].value != "" &&
    msg[2].value != "" &&
    msg[3].value != "" &&
    msg[4].value != ""
  ) {
    mensagemForm2 = {
      nome: msg[0].value,
      email: msg[1].value,
      tel: msg[2].value,
      assunto: msg[3].value,
      msg: msg[4].value,
    };

    console.log(mensagemForm2);
    console.log("Enviado com Sucesso");
    document.getElementById("confirmaEnvio2").style.display = "block";
    document.getElementById("erroCampos2").style.display = "none";

    msg[0].style.border = "none";
    msg[1].style.border = "none";
    msg[2].style.border = "none";
    msg[3].style.border = "none";
    msg[4].style.border = "none";
  } else {
    console.log("Prencha todos os campos");
    document.getElementById("erroCampos2").style.display = "block";
    document.getElementById("confirmaEnvio2").style.display = "none";
  }
}







