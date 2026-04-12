// Controle de funcionalidades incompletas na branch principal

const flags = {
    NOVO_SISTEMA_PIX: process.env.USE_NOVO_PIX === 'true'
};

function processarPagamento() {
    if (flags.NOVO_SISTEMA_PIX) {
        console.log("[ATIVO] Iniciando pagamento com o NOVO fluxo do PIX...");
        // Código novo em desenvolvimento
    } else {
        console.log("[INATIVO] Usando o fluxo de pagamento padrão.");
        // Código de produção
    }
}

processarPagamento();