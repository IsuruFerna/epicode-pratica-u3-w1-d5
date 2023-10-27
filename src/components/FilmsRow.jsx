import { Component } from "react";
import Row from "react-bootstrap/Row";
import SingleMovieComp from "./SingleMovieComp";
import { Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

class FilmsRow extends Component {
   state = {
      movies: [],
      isLoading: true,
      isError: false,
   };

   getFilmData = () => {
      fetch(
         `http://www.omdbapi.com/?i=tt3896198&apikey=a8fa4c9b&s=${this.props.title}`
      )
         .then((response) => {
            if (!response.ok) {
               throw new Error("Error getting data");
            }
            return response.json();
         })
         .then((data) => {
            console.log("Fetch went fine", data);
            this.setState({
               movies: data.Search,
               isLoading: false,
            });
         })
         .catch((err) => {
            console.log("ERROR", err);
            this.setState({
               isLoading: false,
               isError: true,
            });
         });
   };

   componentDidMount() {
      this.getFilmData();
   }

   render() {
      // console.log(this.state.movies);
      // console.log("search ", this.props.search);
      return (
         <Container fluid>
            <h4>{this.props.title}</h4>
            {this.state.isLoading && (
               <div className="text-center">
                  <Spinner animation="border" />
               </div>
            )}
            {this.state.isError && (
               <Alert variant="danger">
                  <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                  <p>Something went wrong while loading!</p>
               </Alert>
            )}

            <Row
               //  sm={2}
               //  lg={4}
               //  xl={6}
               className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4"
               //  flex-nowrap overflow-scroll
            >
               {this.state.movies &&
                  this.state.movies
                     .filter((movie, index) => index < 6)
                     .map((movie) => {
                        return (
                           <SingleMovieComp
                              key={movie.imdbID}
                              src={movie.Poster}
                              alt={movie.Title}
                           />
                        );
                     })}
            </Row>
         </Container>
      );
   }
}

export default FilmsRow;
