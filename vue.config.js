module.exports = {
	devServer: {
		port: 9876,
		proxy: {
			'/v1': {
				target: 'http://localhost:3000'
			}
		}
	}
}
