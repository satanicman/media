block('comments-form').elem('file')(
    tag()('input'),
    attrs()(function() {
        return {
            type: 'file',
            name: this.ctx.name,
            id: 'comments-form__file'
        };
    })
);