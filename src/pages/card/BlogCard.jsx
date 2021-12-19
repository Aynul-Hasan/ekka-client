import React from 'react'
import Rating from 'react-rating'
const BlogCard = (props) => {
    return (
        <>
          <div className="container bg-white mb-5">
                <div>
                        <div><i className="fas fa-6x text-muted fa-quote-left"></i></div>
                        <div className="text-center">
                            <p className="text-muted w-50 mx-auto">{props.data.decs}</p>
                            <h4>{props.data.name}</h4>
                            <Rating
                              initialRating={props.data.ratting}
                              emptySymbol={`fas color fa-star`}
                              fullSymbol={`far color  fa-star`}
                              readonly
                            />
                        </div>
                        <div className="text-end"><i className="fas fa-6x text-muted fa-quote-right"></i></div>
                </div>
        </div>  
        </>
    )
}

export default BlogCard
