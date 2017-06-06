// modules.define('comments-form__textarea', ['i-bem-dom'], function(provide, BEMDOM) {
//     provide(BEMDOM.declElem('comments-form', 'textarea', {
//         onSetMod : {
//             'js': {
//                 'inited': function() {
//                 }
//             }
//         },
//         onFocus: function() {
//             this.setMod('focused');
//         },
//         onBluer: function() {
//             this.delMod('focused');
//         }
//     }, {
//         onInit : function () {
//             this._domEvents().on('focus', this.prototype.onFocus());
//         }
//     }));
// });