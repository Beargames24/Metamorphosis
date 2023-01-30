document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();

    //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
    const telefono = "59177543440";

    const cliente = document.querySelector("#cliente").value;
    const contexto = document.querySelector("#contexto").value;
    const resp = document.querySelector("#respuesta");

    resp.classList.remove("fail");
    resp.classList.remove("send");

    const url = `https://api.whatsapp.com/send?phone=${telefono}&text=
          Metamorphosis Agencia de Marketing Digital, %0A
          solicito informacion%0A%0A
          ¿Cuál es el nombre de tu empresa?%0A
            ${cliente}%0A
          *¿Qué es lo que necesita?*%0A
            ${contexto}`;

    if (cliente === "" || contexto === "") {
        resp.classList.add("fail");
        resp.innerHTML = `Faltan algunos datos, ${cliente}`;
        return false;
    }
    resp.classList.remove("fail");
    resp.classList.add("send");
    resp.innerHTML = `Se ha enviado tu reserva, ${cliente}`;
  
    window.open(url);
  });