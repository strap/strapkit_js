
module.exports = {
    klass: require('./klass.js'),
    Page: require('./page.js'),
	'features': [
        {
            'id': 'com.strap.ui.page',
            'location': '../features/page.js',
            'namespace': 'Page'
        },
        {
            'id': 'com.strap.ui.klass',
            'location': '../features/klass.js',
            'namespace': 'klass'
        }
	]
};
