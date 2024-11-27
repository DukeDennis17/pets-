document.addEventListener('DOMContentLoaded', function () {
    const accordionButtons = document.querySelectorAll('.accordion-button');
    
    accordionButtons.forEach(button => {
      button.addEventListener('click', function () {
        const content = this.nextElementSibling;
        const isOpen = content.style.display === 'block';
        
        // Slēdz iepriekš atvērtos saturus
        document.querySelectorAll('.accordion-content').forEach(c => {
          c.style.display = 'none';
        });
        
        // Ja šis saturs nav atvērts, atver to
        if (!isOpen) {
          content.style.display = 'block';
        }
      });
    });
  });
  