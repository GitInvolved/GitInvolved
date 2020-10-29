const mongoose = require('mongoose');

const { Schema } = mongoose;

const userReposSchema = new Schema ({
  gitId: {type: Number, required: true},
  name: {type: String, required: true}, 
  description: {type: String, required: false},
  owner: {type: String, required: true},
  forked: {type: Boolean, required: true},
  stargazers: {type: Number, required: true},
  commits: {type: String, required: true},
  languages_url: {type: String, required: true},
  languages: {type: Object, required: true, default: {}},
  repoUrl: {type: String, required: true},  
  help: {type: Boolean, required: false}
}, {minimize: false});


export default mongoose.model('UserRepos', userReposSchema);


