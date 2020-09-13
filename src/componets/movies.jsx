import React, { Component } from 'react';

class Movies extends Component {
    state = { 
        movies: [
            {
                id: 1,
                name: "Hindi"
            },
            {
                id:2,
                name: "English"
            }
        ]
     }
    render() { 
        return (  
            <table className="table">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>NAME</td>
                    </tr>
                </thead>
                <tbody>
                    {this.state.movies.map(movie => 
                        <tr>
                        <td>{movie.id}</td>
                        <td>{movie.name}</td>
                    </tr>
                    )}
                </tbody>
            </table>
        );
    }
}
export default Movies;