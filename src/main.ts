import { mixColors } from './mix';

function init() {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.alignItems = 'center';
  container.style.padding = '2rem';
  container.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";

  // Header with logo
  const header = document.createElement('div');
  header.style.display = 'flex';
  header.style.alignItems = 'center';
  header.style.width = '100%';
  header.style.justifyContent = 'space-between';
  header.style.marginBottom = '1.5rem';

  const title = document.createElement('h1');
  title.textContent = 'Colour Mixer';
  title.style.margin = '0';
  title.style.fontSize = '1.5rem';

  const logoLink = document.createElement('a');
  logoLink.href = 'https://github.com/StatelessSquad';
  logoLink.target = '_blank';
  logoLink.rel = 'noopener noreferrer';

  const logoImg = document.createElement('img');
  logoImg.src = 'https://github.com/StatelessSquad.png?size=32';
  logoImg.alt = 'StatelessSquad';
  logoImg.style.width = '32px';
  logoImg.style.height = '32px';

  logoLink.appendChild(logoImg);
  header.appendChild(title);
  header.appendChild(logoLink);
  container.appendChild(header);

  // Inputs
  const inputsDiv = document.createElement('div');
  inputsDiv.style.display = 'flex';
  inputsDiv.style.gap = '1rem';
  inputsDiv.style.marginBottom = '1rem';
  inputsDiv.style.width = '100%';
  inputsDiv.style.maxWidth = '400px';

  const input1 = document.createElement('input');
  input1.type = 'color';
  input1.value = '#ff0000';
  input1.style.width = '50%';

  const input2 = document.createElement('input');
  input2.type = 'color';
  input2.value = '#0000ff';
  input2.style.width = '50%';

  inputsDiv.appendChild(input1);
  inputsDiv.appendChild(input2);
  container.appendChild(inputsDiv);

  // Mixed colour display
  const mixedDiv = document.createElement('div');
  mixedDiv.style.display = 'flex';
  mixedDiv.style.flexDirection = 'column';
  mixedDiv.style.alignItems = 'center';
  mixedDiv.style.marginBottom = '1rem';

  const mixedLabel = document.createElement('div');
  mixedLabel.textContent = 'Mixed colour';
  mixedLabel.style.fontWeight = 'bold';
  mixedLabel.style.marginBottom = '0.5rem';

  const mixedColorBox = document.createElement('div');
  mixedColorBox.style.width = '120px';
  mixedColorBox.style.height = '120px';
  mixedColorBox.style.border = '2px solid #333';
  mixedColorBox.style.borderRadius = '8px';
  mixedColorBox.style.display = 'flex';
  mixedColorBox.style.alignItems = 'center';
  mixedColorBox.style.justifyContent = 'center';
  mixedColorBox.style.color = '#fff';
  mixedColorBox.style.fontWeight = 'bold';
  mixedColorBox.style.textAlign = 'center';

  const mixedHex = document.createElement('span');
  mixedHex.id = 'mixed-hex';
  mixedHex.textContent = '#ffffff';
  mixedColorBox.appendChild(mixedHex);

  mixedDiv.appendChild(mixedLabel);
  mixedDiv.appendChild(mixedColorBox);
  container.appendChild(mixedDiv);

  // Copy button
  const copyBtn = document.createElement('button');
  copyBtn.textContent = 'Copy hex';
  copyBtn.style.padding = '0.5rem 1rem';
  copyBtn.style.fontSize = '1rem';
  copyBtn.style.cursor = 'pointer';
  copyBtn.style.border = 'none';
  copyBtn.style.borderRadius = '4px';
  copyBtn.style.backgroundColor = '#007bff';
  copyBtn.style.color = '#fff';
  copyBtn.style.marginBottom = '1rem';
  copyBtn.addEventListener('click', async () => {
    const hex = mixedHex.textContent;
    try {
      await navigator.clipboard.writeText(hex);
      copyBtn.textContent = 'Copied!';
      setTimeout(() => {
        copyBtn.textContent = 'Copy hex';
      }, 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
      copyBtn.textContent = 'Copy failed';
      setTimeout(() => {
        copyBtn.textContent = 'Copy hex';
      }, 2000);
    }
  });
  container.appendChild(copyBtn);

  // Update function
  function updateMixedColor() {
    const hex1 = input1.value;
    const hex2 = input2.value;
    const mixed = mixColors(hex1, hex2);
    mixedColorBox.style.backgroundColor = mixed;
    mixedHex.textContent = mixed;
  }

  input1.addEventListener('input', updateMixedColor);
  input2.addEventListener('input', updateMixedColor);

  // Initial update
  updateMixedColor();

  document.getElementById('app')!.appendChild(container);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
