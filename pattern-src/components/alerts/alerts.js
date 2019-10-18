(() => {
    'use strict';

    for (var alertElement of document.querySelectorAll('.alert')) {
        alertElement.classList.add('show');
        alertElement.classList.remove('hide');
    }
})();
