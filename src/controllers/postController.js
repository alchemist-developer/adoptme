const { Post } = require("../models")

const PostController = {
    async create(req, res) {
        try {
        const { content } = req.body;

        const {id: user_id, name: name, avatar: avatar, apartment: apartment} = req.auth
        
        
        const newPost = await Post.create({
           user_id,
           content,
           name,
           apartment,
           avatar
        });

        res.json(newPost);
        } catch (error) {
            res.json('Não foi possível publicar');
            console.error(error);

        }
    },

    async listAllPosts(req, res) {
        try {
            const listPosts = await Post.findAll();
            res.status(201).json(listPosts);
        } catch (error) {
            res.json('Falha ao listar os posts');
            console.error(error)
        }
    },

   

    async updatePost(req, res) {
        try {
            const {
                id
            } = req.params;
            const {
                content
            } = req.body;
            const {
                name,
            } = req.auth;

            const postByUser = await Post.count({
                where: {
                    post_id: id,
                    name
                }
            });

            if (!postByUser) {
                return res.status(400).json('Erro ao tentar atualizar o post');
            }

            const updatedPost = await Post.update({
                content
            }, {
                where: {
                    post_id: id,
                }
            });
            res.status(201).json('Post atualizado com sucesso');
        } catch (error) {
            res.status(404).json('Verfique os dados e tente novamente');
            console.error(error);
        };
    },


    async deletePost(req, res) {
        try {
            const {
                id
            } = req.params;
            const {
                name,
            } = req.auth;

            const postByUser = await Post.count({
                where: {
                    post_id: id,
                    name
                }
            });

            if (!postByUser) {
                return res.status(400).json('Erro ao tentar deletar o post');
            }

            await Post.destroy({
                where: {
                    post_id:id
                }
            });

            res.status(201).json('Post deletado com sucesso');
        } catch (error) {
            res.json('Falha ao deletar post')
            console.error(error);
        }
    },

}

module.exports = PostController