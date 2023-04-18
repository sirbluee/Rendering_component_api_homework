import Button from "./Button";
export const Products = ({ products }) => {
  return (
    <tbody>
      {products.map((product) => (
        <tr key={product.id}>
          <th scope="row">{product.id}</th>
          <td>
            <img src={product.images[0]} width={200} alt=""/>
            <Button/>
          </td>
          <td style={{fontWeight: "bold"}}>{product.title}</td>
          <td>{product.description}</td>
          <td>${product.price}</td>
        </tr>
      ))}
    </tbody>
  );
};