import { useContext } from "react";
import { UserContext } from "../App";

const ProductDetails = ({
  deepName = "SAMSUNG",
  deepPrice = 2000,
  deepDescription = "12GB RAM with 248GB",
}) => {
  let { user } = useContext(UserContext);

  // console.log(user);

  return (
    <section>
      <article>
        <h5>UserName: {user.uName}</h5>
        <h5>Email: {user.email}</h5>
      </article>
      <h3>{deepName}</h3>
      <h6>{deepPrice}</h6>
      <p>{deepDescription}</p>
    </section>
  );
};

export default ProductDetails;
