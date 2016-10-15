import React from 'react';


const MovieBox = (props) => {
	return (<div>
			<div className="row">
				<div className="col-xs-12">
					{props.movie.title}
				</div>
			</div>
		</div>);
}

export default MovieBox;
 