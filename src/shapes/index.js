/**
 * Created by manaev on 23/11/2016.
 * @author manaev
 */
import { PropTypes  }  from 'react'

const Comment = PropTypes.shape({
    title: PropTypes.string,
    user: PropTypes.string.isRequired,
    text: PropTypes.string
})

const Article = PropTypes.shape({
    title: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(Comment),
    text: PropTypes.string
})

export {Article,Comment}