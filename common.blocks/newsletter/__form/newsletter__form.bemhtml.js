block('newsletter').elem('form')(
    tag()('form'),
    attrs()(function() {
        var attrs = new Object();
        this.ctx.method && (attrs.method = this.ctx.method);
        this.ctx.action && (attrs.action = this.ctx.action);
        return attrs;
    })
);