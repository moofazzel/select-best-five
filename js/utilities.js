function getInputValueById(elementId) {
  const element = parseFloat(document.getElementById(elementId).value);
  return element;
}

function setInnerTextById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
