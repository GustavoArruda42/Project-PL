const authToggle = document.getElementById('auth-toggle');
const nameGroup = document.getElementById('name-group');
const authTitle = document.getElementById('auth-title');
const authBtn = document.getElementById('auth-btn');
let isLogin = true;

authToggle.addEventListener('click', () => {
    isLogin = !isLogin;
    nameGroup.style.display = isLogin ? 'none' : 'block';
    authTitle.innerText = isLogin ? 'Entrar na Biblioteca' : 'Criar Nova Conta';
    authBtn.innerText = isLogin ? 'Entrar' : 'Cadastrar';
    authToggle.innerHTML = isLogin 
        ? 'Ainda não tem conta? <span>Cadastre-se</span>' 
        : 'Já tem uma conta? <span>Faça Login</span>';
});

app.use(express.static('frontend'));

// Rota específica para a página de login/cadastro (opcional)
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/frontend/auth.css');
});