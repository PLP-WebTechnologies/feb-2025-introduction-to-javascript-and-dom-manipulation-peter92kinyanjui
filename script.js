
        // Change text content dynamically
        document.getElementById('changeTextButton').addEventListener('click', function() {
            document.getElementById('text').textContent = 'The text has been changed,This is new text!';
        });

        // Toggle CSS styles
        document.getElementById('toggleStyleButton').addEventListener('click', function() {
            const textElement = document.getElementById('text');
            textElement.classList.toggle('color-change');
            textElement.classList.toggle('font-change');
            textElement.classList.toggle('background-change');
            textElement.classList.toggle('border-change');          
        });

        // Add an element
        document.getElementById('addElementButton').addEventListener('click', function() {
            const newElement = document.createElement('p');
            newElement.textContent = 'A new paragraph has been added!';
            document.getElementById('dynamicContent').appendChild(newElement);
        });

        // Remove an element
        document.getElementById('removeElementButton').addEventListener('click', function() {
            const dynamicContent = document.getElementById('dynamicContent');
            if (dynamicContent.lastChild) {
                dynamicContent.removeChild(dynamicContent.lastChild);
            } else {
                alert('No elements to remove!');
            }
        });
    