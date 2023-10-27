import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const SingleMovieComp = function (props) {
   console.log(props.isLoading);
   return (
      <>
         <Col className="mb-2 text-center px-1">
            <Image className="h-100" src={props.src} alt={props.alt} fluid />
         </Col>
      </>
   );
};

export default SingleMovieComp;
