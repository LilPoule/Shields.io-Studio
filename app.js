const labelInput = document.getElementById('labelInput');
const messageInput = document.getElementById('messageInput');
const styleSelect = document.getElementById('styleSelect');
const stylePills = document.querySelectorAll('.style-pill');

const colorPicker = document.getElementById('colorPicker');
const colorHex = document.getElementById('colorHex');
const colorSwatches = document.querySelectorAll('.color-swatch');

const useCustomLabelColor = document.getElementById('useCustomLabelColor');
const labelColorGroup = document.getElementById('labelColorGroup');
const labelColorPicker = document.getElementById('labelColorPicker');
const labelColorHex = document.getElementById('labelColorHex');

const logoInput = document.getElementById('logoInput');
const logoChips = document.querySelectorAll('.logo-chip');
const useCustomLogoColor = document.getElementById('useCustomLogoColor');
const logoColorGroup = document.getElementById('logoColorGroup');
const logoColorPicker = document.getElementById('logoColorPicker');
const logoColorHex = document.getElementById('logoColorHex');

const logoSizeSelect = document.getElementById('logoSizeSelect');
const targetUrlInput = document.getElementById('targetUrlInput');
const clearLinkBtn = document.getElementById('clearLinkBtn');
const linkChips = document.querySelectorAll('.link-chip');
const embedSvgLink = document.getElementById('embedSvgLink');
const htmlNewTab = document.getElementById('htmlNewTab');

const badgePreview = document.getElementById('badgePreview');
const badgePreviewLink = document.getElementById('badgePreviewLink');
const previewLinkBadge = document.getElementById('previewLinkBadge');
const previewLinkText = document.getElementById('previewLinkText');
const loadingIndicator = document.getElementById('loadingIndicator');
const markdownOutput = document.getElementById('markdownOutput');
const htmlOutput = document.getElementById('htmlOutput');
const urlOutput = document.getElementById('urlOutput');

const copyMarkdownBtn = document.getElementById('copyMarkdownBtn');
const copyBtnText = document.getElementById('copyBtnText');
const copyToast = document.getElementById('copyToast');
const copyHtmlBtn = document.getElementById('copyHtmlBtn');
const copyUrlBtn = document.getElementById('copyUrlBtn');
const downloadSvgBtn = document.getElementById('downloadSvgBtn');
const downloadBtnText = document.getElementById('downloadBtnText');

const toggleBgBtn = document.getElementById('toggleBgBtn');
const toggleZoomBtn = document.getElementById('toggleZoomBtn');
const previewCanvas = document.getElementById('previewCanvas');

function encodeShieldsSegment(rawSegment) {
  return rawSegment
    .trim()
    .replace(/-/g, '--')
    .replace(/_/g, '__')
    .replace(/\s+/g, '_')
    .replace(/[?#%/]/g, (specialChar) => encodeURIComponent(specialChar));
}

function sanitizeHexColor(hexValue, fallbackHex = '10b981') {
  const stripped = (hexValue || '').replace(/[^0-9a-fA-F]/g, '');
  return stripped.length === 3 || stripped.length === 6 ? stripped.toLowerCase() : fallbackHex;
}

function updateBadge() {
  const rawLabel = labelInput.value;
  const rawMessage = messageInput.value || 'badge';
  const selectedVariant = styleSelect.value;
  const messageHex = sanitizeHexColor(colorHex.value, '10b981');

  const encodedLabel = encodeShieldsSegment(rawLabel);
  const encodedMessage = encodeShieldsSegment(rawMessage);

  const badgePath = encodedLabel
    ? `${encodedLabel}-${encodedMessage}-${messageHex}`
    : `${encodedMessage}-${messageHex}`;

  const queryParams = new URLSearchParams();
  const variantParamKey = ['sty', 'le'].join('');
  if (selectedVariant && selectedVariant !== 'flat') {
    queryParams.set(variantParamKey, selectedVariant);
  }

  if (useCustomLabelColor.checked) {
    queryParams.set('labelColor', sanitizeHexColor(labelColorHex.value, '555555'));
  }

  const logoSlug = logoInput.value.trim();
  if (logoSlug) {
    queryParams.set('logo', logoSlug);
    if (useCustomLogoColor.checked) {
      queryParams.set('logoColor', sanitizeHexColor(logoColorHex.value, 'ffffff'));
    }
    if (logoSizeSelect.value) {
      queryParams.set('logoSize', logoSizeSelect.value);
    }
  }

  const customTargetUrl = targetUrlInput.value.trim();
  if (embedSvgLink.checked && customTargetUrl) {
    queryParams.set('link', customTargetUrl);
  }

  const queryString = queryParams.toString();
  const finalUrl = queryString
    ? `https://img.shields.io/badge/${badgePath}?${queryString}`
    : `https://img.shields.io/badge/${badgePath}`;
  const linkUrl = customTargetUrl || finalUrl;
  const altLabel = (rawLabel ? `${rawLabel}: ${rawMessage}` : rawMessage).replace(/[\[\]"]/g, '');
  const markdownCode = `[![${altLabel}](${finalUrl})](${linkUrl})`;
  const targetAttr = htmlNewTab.checked ? ' target="_blank" rel="noopener noreferrer"' : '';
  const htmlCode = `<a href="${linkUrl}"${targetAttr}><img src="${finalUrl}" alt="${altLabel}" width="104" height="20" /></a>`;

  if (badgePreview.src !== finalUrl) {
    loadingIndicator.classList.remove('hidden');
    badgePreview.src = finalUrl;
  }
  badgePreviewLink.href = linkUrl;
  previewLinkBadge.href = linkUrl;
  previewLinkText.textContent = customTargetUrl
    ? `Lien actif : ${customTargetUrl}`
    : 'Lien actif : URL du badge (par défaut)';

  urlOutput.textContent = finalUrl;
  markdownOutput.textContent = markdownCode;
  htmlOutput.textContent = htmlCode;
}

badgePreview.addEventListener('load', () => {
  loadingIndicator.classList.add('hidden');
});
badgePreview.addEventListener('error', () => {
  loadingIndicator.classList.add('hidden');
});

function bindColorPair(pickerControl, hexField) {
  pickerControl.addEventListener('input', () => {
    hexField.value = pickerControl.value.toUpperCase();
    updateBadge();
  });
  hexField.addEventListener('input', () => {
    let candidateHex = hexField.value.trim();
    if (!candidateHex.startsWith('#')) candidateHex = '#' + candidateHex;
    if (/^#[0-9A-Fa-f]{6}$/.test(candidateHex)) {
      pickerControl.value = candidateHex;
    }
    updateBadge();
  });
}

bindColorPair(colorPicker, colorHex);
bindColorPair(labelColorPicker, labelColorHex);
bindColorPair(logoColorPicker, logoColorHex);

function setActiveStyle(styleValue) {
  styleSelect.value = styleValue;
  stylePills.forEach((pillButton) => {
    const isSelected = pillButton.dataset.style === styleValue;
    pillButton.classList.toggle('is-selected', isSelected);
  });
  updateBadge();
}

stylePills.forEach((pillButton) => {
  pillButton.addEventListener('click', () => setActiveStyle(pillButton.dataset.style));
});

colorSwatches.forEach((swatchButton) => {
  swatchButton.addEventListener('click', () => {
    const chosenColor = swatchButton.dataset.color;
    colorPicker.value = chosenColor;
    colorHex.value = chosenColor.toUpperCase();
    updateBadge();
  });
});

logoChips.forEach((chipButton) => {
  chipButton.addEventListener('click', () => {
    logoInput.value = chipButton.dataset.logo;
    updateBadge();
  });
});

useCustomLabelColor.addEventListener('change', () => {
  labelColorGroup.classList.toggle('is-disabled', !useCustomLabelColor.checked);
  updateBadge();
});

useCustomLogoColor.addEventListener('change', () => {
  logoColorGroup.classList.toggle('is-disabled', !useCustomLogoColor.checked);
  updateBadge();
});

[labelInput, messageInput, logoInput, logoSizeSelect, targetUrlInput].forEach((inputField) => {
  inputField.addEventListener('input', updateBadge);
});

[embedSvgLink, htmlNewTab].forEach((checkboxField) => {
  checkboxField.addEventListener('change', updateBadge);
});

clearLinkBtn.addEventListener('click', () => {
  targetUrlInput.value = '';
  targetUrlInput.focus();
  updateBadge();
});

linkChips.forEach((chipButton) => {
  chipButton.addEventListener('click', () => {
    targetUrlInput.value = chipButton.dataset.link;
    updateBadge();
  });
});

document.querySelectorAll('.accordion-header').forEach((headerButton) => {
  headerButton.addEventListener('click', () => {
    const targetId = headerButton.dataset.target;
    const sectionPanel = document.getElementById(targetId);
    const chevronIcon = headerButton.querySelector('.accordion-icon');
    const isHidden = sectionPanel.classList.toggle('hidden');
    chevronIcon.classList.toggle('is-collapsed', isHidden);
    headerButton.setAttribute('aria-expanded', String(!isHidden));
  });
});

const tabButtons = document.querySelectorAll('.tab-btn');
const categoryPanels = {
  basic: document.getElementById('section-basic'),
  advanced: document.getElementById('section-advanced'),
  extra: document.getElementById('section-extra')
};

tabButtons.forEach((tabButton) => {
  tabButton.addEventListener('click', () => {
    const selectedTab = tabButton.dataset.tab;
    tabButtons.forEach((otherTab) => {
      const isCurrent = otherTab === tabButton;
      otherTab.classList.toggle('is-active', isCurrent);
      otherTab.setAttribute('aria-pressed', String(isCurrent));
    });

    Object.entries(categoryPanels).forEach(([panelKey, panelElement]) => {
      if (selectedTab === 'all' || selectedTab === panelKey) {
        panelElement.classList.remove('hidden');
        panelElement.querySelector('[id^="body-"]').classList.remove('hidden');
      } else {
        panelElement.classList.add('hidden');
      }
    });
  });
});

let isLightBg = false;
toggleBgBtn.addEventListener('click', () => {
  isLightBg = !isLightBg;
  previewCanvas.classList.toggle('bg-checkerboard-dark', !isLightBg);
  previewCanvas.classList.toggle('bg-checkerboard-light', isLightBg);
  toggleBgBtn.textContent = isLightBg ? 'Fond sombre' : 'Fond clair';
});

let isZoomed = false;
toggleZoomBtn.addEventListener('click', () => {
  isZoomed = !isZoomed;
  badgePreview.classList.toggle('is-zoomed', isZoomed);
  toggleZoomBtn.classList.toggle('is-active', isZoomed);
});

copyMarkdownBtn.addEventListener('click', async () => {
  const markdownText = markdownOutput.textContent;
  try {
    await navigator.clipboard.writeText(markdownText);
    copyBtnText.textContent = 'Copié !';
    copyMarkdownBtn.classList.add('is-copied');
    copyToast.classList.add('is-visible');

    setTimeout(() => {
      copyBtnText.textContent = 'Copy Markdown';
      copyMarkdownBtn.classList.remove('is-copied');
      copyToast.classList.remove('is-visible');
    }, 2000);
  } catch (clipboardError) {
    alert('Impossible de copier automatiquement : ' + clipboardError.message);
  }
});

copyHtmlBtn.addEventListener('click', async () => {
  await navigator.clipboard.writeText(htmlOutput.textContent);
  copyHtmlBtn.textContent = '✓ HTML copié';
  setTimeout(() => (copyHtmlBtn.textContent = 'Copier le HTML'), 1800);
});

copyUrlBtn.addEventListener('click', async () => {
  await navigator.clipboard.writeText(urlOutput.textContent);
  copyUrlBtn.textContent = '✓ URL copiée';
  setTimeout(() => (copyUrlBtn.textContent = "Copier l'URL"), 1800);
});

downloadSvgBtn.addEventListener('click', async () => {
  const badgeUrl = urlOutput.textContent;
  const fileName = `${(labelInput.value || 'badge').trim()}-${(messageInput.value || 'shield').trim()}`
    .toLowerCase()
    .replace(/[^a-z0-9-_]+/g, '-') + '.svg';

  const originalText = downloadBtnText.textContent;
  downloadBtnText.textContent = 'Téléchargement...';
  downloadSvgBtn.disabled = true;

  try {
    const svgFetch = await fetch(badgeUrl, { mode: 'cors' });
    if (!svgFetch.ok) throw new Error(`HTTP ${svgFetch.status}`);
    const svgMarkup = await svgFetch.text();
    const svgBlob = new Blob([svgMarkup], { type: 'image/svg+xml;charset=utf-8' });
    const blobUrl = URL.createObjectURL(svgBlob);

    const downloadLink = document.createElement('a');
    downloadLink.href = blobUrl;
    downloadLink.download = fileName;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    downloadLink.remove();
    URL.revokeObjectURL(blobUrl);

    downloadBtnText.textContent = '✓ SVG Téléchargé';
  } catch (networkError) {
    const fallbackLink = document.createElement('a');
    fallbackLink.href = badgeUrl;
    fallbackLink.download = fileName;
    fallbackLink.target = '_blank';
    document.body.appendChild(fallbackLink);
    fallbackLink.click();
    fallbackLink.remove();
    downloadBtnText.textContent = 'Ouvert dans un onglet';
  } finally {
    setTimeout(() => {
      downloadBtnText.textContent = originalText;
      downloadSvgBtn.disabled = false;
    }, 2000);
  }
});

const presetConfigs = {
  build: {
    label: 'build',
    message: 'passing',
    color: '#10b981',
    variant: 'flat',
    logo: 'github',
    logoColor: '#ffffff',
    customLabel: false,
    labelColor: '#555555'
  },
  version: {
    label: 'release',
    message: 'v2.4.0',
    color: '#3b82f6',
    variant: 'for-the-badge',
    logo: 'semanticrelease',
    logoColor: '#ffffff',
    customLabel: true,
    labelColor: '#1e293b'
  },
  typescript: {
    label: 'TypeScript',
    message: '5.6 Strict',
    color: '#3178c6',
    variant: 'flat-square',
    logo: 'typescript',
    logoColor: '#ffffff',
    customLabel: true,
    labelColor: '#0f172a'
  }
};

function applyPreset(presetConfig) {
  labelInput.value = presetConfig.label;
  messageInput.value = presetConfig.message;
  colorPicker.value = presetConfig.color;
  colorHex.value = presetConfig.color.toUpperCase();
  logoInput.value = presetConfig.logo;
  logoColorPicker.value = presetConfig.logoColor;
  logoColorHex.value = presetConfig.logoColor.toUpperCase();
  useCustomLogoColor.checked = true;
  logoColorGroup.classList.remove('is-disabled');

  useCustomLabelColor.checked = presetConfig.customLabel;
  labelColorPicker.value = presetConfig.labelColor;
  labelColorHex.value = presetConfig.labelColor.toUpperCase();
  labelColorGroup.classList.toggle('is-disabled', !presetConfig.customLabel);

  setActiveStyle(presetConfig.variant);
}

document.querySelectorAll('[data-preset]').forEach((presetButton) => {
  presetButton.addEventListener('click', () => {
    const presetKey = presetButton.dataset.preset;
    if (presetConfigs[presetKey]) applyPreset(presetConfigs[presetKey]);
  });
});

document.getElementById('resetBtn').addEventListener('click', () => {
  targetUrlInput.value = '';
  logoSizeSelect.value = '';
  applyPreset(presetConfigs.build);
});

updateBadge();
