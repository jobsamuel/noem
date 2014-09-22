var mongoose = require('mongoose')
,	schema = {
				name: String,
				website: Boolean,
				type: String
			}
,	bizSchema = mongoose.Schema(schema)
,	Biz = mongoose.model("Biz", bizSchema);

module.exports = Biz;
