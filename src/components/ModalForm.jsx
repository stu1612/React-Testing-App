import { useState } from "react";

export default function ModalForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  return (
    <form action="">
      <label>
        Add Product Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Ex: Sofa"
        />
      </label>
      <label>
        Add Product Price:
        <input
          type="text"
          name="price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          placeholder="Ex: 300"
        />
      </label>
    </form>
  );
}