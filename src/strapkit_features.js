
module.exports = {
    klass: require('../features/klass.js'),
    Page: require('../features/page.js'),
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
