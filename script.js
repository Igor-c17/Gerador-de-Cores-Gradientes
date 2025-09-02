const gradientBox = document.querySelector(".gradient_box");
const selectMenu = document.querySelector(".select_box select")
const colorInputs = document.querySelectorAll(".colors input");
const textarea = document.querySelector("textarea");
const refreshBtn = document.querySelector(".refresh")
const copyBtn = document.querySelector(".copy");

const getRandomColor = () => {
  // Gera uma cor aleatória no formato hexadecimal, por exemplo: #5665E9
  const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
  return `#${randomHex}`;
}

const generateGradient = (isRandom) => {
  if (isRandom) {
    // Se 'isRandom' for verdadeiro, atualiza os valores dos inputs de cor com cores aleatórias
    colorInputs[0].value = getRandomColor();
    colorInputs[1].value = getRandomColor();
  }
  // Cria uma string de gradiente com base na opção selecionada no menu e nas cores dos inputs
  const gradient = `linear-gradient(${selectMenu.value}, ${colorInputs[0].value}, ${colorInputs[1].value})`;
  gradientBox.style.background = gradient;
  textarea.value = `background: ${gradient};`;
}   

const copyCode = () => {
    navigator.clipboard.writeText(textarea.value);
    copyBtn.innerText = "Código Copiado!"
    setTimeout(() => copyBtn.innerText = "Copiar Código", 1600);
}

colorInputs.forEach(input => {
  // Executa a função 'generateGradient' sempre que um input de cor for clicado
  input.addEventListener("input", () => generateGradient(false));
})

selectMenu.addEventListener("change", () => generateGradient(false));
refreshBtn.addEventListener("click", () => generateGradient(true));
copyBtn.addEventListener("click", copyCode);