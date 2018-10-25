module.exports = {
	sigUp: async (req, res, next) => {
		try {
			req.status(200).json({ message: 'SigUp called'})
		} catch (error) {
			req.status(500).json({ message: error})
		}
	},
	sigIn: async (req, res, next) => {
		try {
			req.status(200).json({ message: 'SigIn called'})
		} catch (error) {
			req.status(500).json({ message: error})
		}
	},
	secret: async (req, res, next) => {
		try {
			req.status(200).json({ message: 'secret called'})
		} catch (error) {
			req.status(500).json({ message: error})
		}
	},
}
