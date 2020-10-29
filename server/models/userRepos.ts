const mongoose = require('mongoose');

const { Schema } = mongoose;

const userReposSchema = new Schema ({
  gitId: {type: Number, required: true},
  description: {type: String, required: true},
  owner: {type: String, required: true},
  forked: {type: Boolean, required: true},
  stargazers: {type: Number, required: true},
  commits: {type: String, required: true},
  languages: {type: String, required: true},
  repoUrl: {type: String, required: true},  
  help: {type: Boolean, required: false}
});


export default mongoose.model('UserRepos', userReposSchema);


