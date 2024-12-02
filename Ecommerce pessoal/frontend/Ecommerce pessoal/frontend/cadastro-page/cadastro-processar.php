<?php
function validarFormulario($dados) {
    $erros = [];
    
    if (empty(trim($dados['nome']))) {
        $erros[] = "O campo 'Nome' é obrigatório.";
    }

    if (empty(trim($dados['sobrenome']))) {
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

    if (empty($dados['termos']) || $dados['termos'] !== 'on') {
        $erros[] = "Você deve aceitar os termos e condições.";
    }

    return $erros;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $dados = filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);
    
    $erros = validarFormulario($dados);
    
    if (!empty($erros)) {
        /
        echo '<ul>';
        foreach ($erros as $erro) {
            echo "<li>$erro</li>";
        }
        echo '</ul>';
        echo '<a href="../cadastro-page/cadastro.html">Voltar ao formulário</a>';
    } else {
       
        $dadosFormatados = "Nome: {$dados['nome']}\n"
            . "Sobrenome: {$dados['sobrenome']}\n"
            . "Sexo: {$dados['sexo']}\n"
            . "Email: {$dados['email']}\n"
            . "Telefone: {$dados['telefone']}\n"
            . "Data de Nascimento: {$dados['nascimento']}\n\n";

        
        file_put_contents('cadastros.txt', $dadosFormatados, FILE_APPEND);

        
        header('Location: ../main-page/index.html');
        exit; 
    }
}
?>
