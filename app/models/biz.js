var mongoose = require('mongoose')
,	schema = {
				name: String,
				type: String,
				logo: String,
				website: String
			}
,	bizSchema = mongoose.Schema(schema)
,	Biz = mongoose.model("Biz", bizSchema);

module.exports = Biz;
