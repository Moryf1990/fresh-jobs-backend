module.exports = bookshelf.model('JobTags', {
	tableName: 'jobs',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt']
});