var PostController = require('./postController');
var SourceController = require('./sourceController');
var TopicController = require('./topicController');
var UserController = require('./userController');

module.exports = {
	post: PostController,
	source: SourceController,
  topic: TopicController,
  user: UserController
}