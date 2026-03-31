document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let cpf = document.getElementById("cpf").value;
    let idade = document.getElementById("idade").value;
    let cidade = document.getElementById("cidade").value;
    let horas = document.getElementById("horas").value;
    let moradia = document.querySelector('input[name="tipo_moradia"]:checked');
    let quintal = document.querySelector('input[name="tipo_quintal"]:checked');
    let pet = document.querySelector('input[name="tipo_pet"]:checked');
    let termos = document.getElementById("termos").checked;
    let motivo = document.getElementById("motivo").value;
    let permite = document.getElementById("permite").checked;
    let seguro = document.getElementById("seguro").checked;
    let financeiro = document.getElementById("financeiro").checked;
    let impulso = document.getElementById("impulso").checked;
    let espacoExterno = document.getElementById("espacoExterno").checked;


    if (nome.length < 3) return alert("Nome inválido");
    if (!email.includes("@")) return alert("Email inválido");
    if (phone.length < 8 || isNaN(phone)) return alert("Telefone inválido");
    if (cpf === "") return alert("CPF obrigatório");
    if (idade === "" || isNaN(idade)) return alert("Idade inválida");
    if (Number(idade) < 18) return alert("Deve ser maior de 18 anos");
    if (cidade === "") return alert("Cidade obrigatória");
    if (!moradia) return alert("Tipo de moradia obrigatório");
    if (!quintal) return alert("Informe se possui quintal");
    if (!pet) return alert("Informe se já teve pet");
    if (horas === "" || isNaN(horas)) return alert("Horas inválidas");
    if (!termos) return alert("Aceite os termos para adoção");

    let cpfsCadastrados = ["12345678900", "11111111111"];
    if (cpfsCadastrados.includes(cpf)) {
        return alert("CPF já cadastrado");
    }


    let motivosInvalidos = ["quero", "porque sim"];
    if (motivosInvalidos.includes(motivo.toLowerCase())) {
        return alert("Motivo inválido");
    }

    if (moradia.value === "predio" && !permite) {
        return alert("Se mora em prédio, informe se permite animais");
    }

    if (moradia.value === "casa" && !seguro) {
        return alert("Se mora em casa, informe se o quintal é seguro");
    }

    if (moradia.value === "predio" && quintal.value === "sim") {
        return alert("Quem mora em apartamento não pode indicar que possui quintal");
    }


    if (!financeiro) {
        return alert("Sem condições financeiras para adoção");
    }


    if (Number(horas) > 8) {
        alert("O animal ficará mais de 8 horas sozinho por dia. Justificativa adicional pode ser necessária.");
    }


    if (pet.value === "nao") {
        alert("A ONG poderá acompanhar sua adaptação, pois você nunca teve pet.");
    }


    if (impulso) {
        alert("Cuidado com decisão impulsiva.");
    }

    if (quintal.value === "nao" && espacoExterno) {
        return alert("Quem não possui quintal não pode indicar uso de espaço externo");
    }

    if (quintal.value === "nao" && espacoExterno) {
        return alert("Quem não possui quintal não pode indicar uso de espaço externo");
    }
    document.getElementById("resultado").innerHTML =
        "Cadastro realizado com sucesso!<br>" +
        "Nome: " + nome + "<br>" +
        "Email: " + email + "<br>" +
        "Telefone: " + phone + "<br>" +
        "Cidade: " + cidade + "<br>" +
        "Moradia: " + moradia;
});
