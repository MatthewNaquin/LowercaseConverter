document.addEventListener('DOMContentLoaded', function() {
  const textElements = document.querySelectorAll('*');
  function convertToLowerCase(element) {
    if (element.nodeType === Node.TEXT_NODE) { 
      // Convert text to lowercase
      element.textContent = element.textContent.toLowerCase();
    } 
  }
  textElements.forEach((element) => {
    Array.from(element.childNodes).forEach(convertToLowerCase);
  });
});
