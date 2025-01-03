import styles from "@/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Title</label>
          <input type="text" name="username" placeholder="Nguyen" />
          <label>Price</label>
          <input type="email" name="email" placeholder="nguyen@admin" />
          <label>Stock</label>
          <input type="password" name="password" />
          <label>Color</label>
          <input type="text" name="phone" placeholder="+12345678" />
          <label>Size</label>
          <input type="text" name="address" placeholder="HCM" />
          <label>Category</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computer">Computer</option>
          </select>
          <label>Description</label>
          <textarea name="desc" id="desc" rows="10" placeholder="Description"></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
