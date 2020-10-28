const mongoose = require('mongoose');

const { Schema } = mongoose;

const userReposSchema = new Schema ({
  owner: {type: String, required: true},
  stars: {type: Number, required: true},
  description: {type: String, required: true},
  url: {type: String, required: true},
  email: {type: String, required: true},
  language: {type: Array, required: true},
  help: {type: Boolean, required: false}
});


export default mongoose.model('UserRepos', userReposSchema);


