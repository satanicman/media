block('mobile-menu-header')(
    attrs()(function() {
        var attrs = new Object();
        attrs['data-toggle'] = 'collapse';
        attrs['data-target'] = '#mobile-menu';
        attrs['aria-expanded'] = 'false';
        return attrs;
    })
);