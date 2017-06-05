block('mobile-menu-collapsed')(
    attrs()(function() {
        var attrs = new Object();
        if(this.ctx.id)
            attrs.id = this.ctx.id;
        return attrs;
    })
);