import { sequelize } from '../../sequelize'
import { Model, DataTypes } from 'sequelize'
import { User } from '../user'
import { Post } from './post'

interface CommentInstance extends Model {
    comment_id: string;
    content: string;
}

const Comment = sequelize.define<CommentInstance>('Comment', {
    comment_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
    },
    content: DataTypes.TEXT,
}, {
    tableName: 'comments'
})

Comment.belongsTo(User, { foreignKey: 'user_id', targetKey: 'user_id' });
User.hasMany(Comment, {
    sourceKey: 'user_id',
    foreignKey: {
        name: 'user_id',
        allowNull: false
    },
    as: 'comments',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

Comment.belongsTo(Post, { foreignKey: 'post_id', targetKey: 'post_id' });
Post.hasMany(Comment, {
    sourceKey: 'post_id',
    foreignKey: {
        name: 'post_id',
    },
    as: 'comments',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});


export { Comment }