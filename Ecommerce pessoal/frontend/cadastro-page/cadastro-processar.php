<?php
// Função para verificar se todos os campos estão preenchidos
function validarFormulario($dados) {
    $erros = [];
    
    if (empty($dados['nome'])) {
        $erros[] = "O campo 'Nome' é obrigatório.";
    }

    if (empty($dados['sobrenome'])) {
        $erros[] = "O campo 'Sobrenome' é obrigatório.";
    }

    if (empty($dados['sexo'])) {
        $erros[] = "O campo 'Sexo' é obrigatório.";
    }

    if (empty($dados['email']) || !filter_var($dados['email'], FILTER_VALIDATE_EMAIL)) {
        $erros[] = "O campo 'Email' é obrigatório e deve ser válido.";
    }

    if (empty($dados['senha'])) {
        $erros[] = "O campo 'Senha' é obrigatório.";
    }

    if ($dados['senha'] !== $dados['confirma-senha']) {
        $erros[] = "As senhas não coincidem.";
    }

    if (empty($dados['telefone'])) {
        $erros[] = "O campo 'Telefone' é obrigatório.";
    }

    if (empty($dados['nascimento'])) {
        $erros[] = "O campo 'Data de Nascimento' é obrigatório.";
    }

    if (!isset($dados['termos'])) {
        $erros[] = "Você deve aceitar os termos e condições.";
    }

    return $erros;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $dados = $_POST;
    
    $erros = validarFormulario($dados);
    
    if (!empty($erros)) {
        
        echo '<ul>';
        foreach ($erros as $erro) {
            echo "<li>$erro</li>";
        }
        echo '</ul>';
        echo '<a href="../cadastro/cadastro.html">Voltar ao formulário</a>';
    } else 
        {$dados['nome']}\nSobrenome: {$dados['sobrenome']}\nSexo: {$dados['sexo']}\nEmail: {$dados['email']}\nTelefone: {$dados['telefone']}\nData de Nascimento: {$dados['nascimento']}\n\n";}
        // Salvando os dados no arquivo 'cadastros.txt'
        file_put_contents('cadastros.txt', $dadosFormatados, FILE_APPEND);
        
        echo "Cadastro realizado com sucesso!";
    }
}
?>
