modules.define('mobile-menu-form__input', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declElem('mobile-menu-form', 'input', {
        onSetMod : {
            'js': {
                'inited': function() {
                    alert('inited');
                }
            }
        }
    }));
});