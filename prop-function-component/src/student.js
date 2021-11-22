import React from 'react';

function Student(props)
{
	return(
		<div>
	    <h1>Name: {props.name}</h1>
	    <p>Email: {props.email}</p>
	  </div>
	);
}

export default Student;