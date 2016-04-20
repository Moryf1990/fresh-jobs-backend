module.exports = bookshelf.model('Company', {
	tableName: 'jobs',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt']
});