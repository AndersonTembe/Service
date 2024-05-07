
// Função para abrir o modal de sucesso
function openSuccessModal() {
    document.getElementById("successModal").style.display = "block";
}

// Função para fechar o modal de sucesso
function closeSuccessModal() {
    document.getElementById("successModal").style.display = "none";
}

// Adiciona um evento de envio ao formulário
document.getElementById("mainForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio do formulário padrão

    // Aqui você pode adicionar o código para enviar os dados do formulário para o servidor
    // Por enquanto, apenas mostraremos o modal de sucesso

    // Adiciona o serviço à tabela de serviços
    addServiceToTable();
    openSuccessModal();
});

// Função para adicionar um serviço à tabela de serviços
function addServiceToTable() {
    var name = document.getElementById("name").value;
    var salario = document.getElementById("Salario").value;
    var localizacao = document.getElementById("Localizacao").value;
    var dataHora = document.getElementById("DataHora").value;
    var vagas = document.getElementById("vagas").value;
    var tipoServico = document.getElementById("TipoServico").value;

    var tableBody = document.getElementById("serviceTableBody");
    var newRow = tableBody.insertRow();
    newRow.innerHTML = "<td>" + name + "</td>" +
        "<td>" + salario + "</td>" +
        "<td>" + localizacao + "</td>" +
        "<td>" + dataHora + "</td>" +
        "<td>" + vagas + "</td>" +
        "<td>" + tipoServico + "</td>";
}
