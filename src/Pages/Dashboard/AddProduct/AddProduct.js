import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useAuth } from "../../../Contexts/AuthProvider";
import Loading from "../../Share/Loading/Loading";

const AddProduct = () => {
  const [uploadErr, setUploadErr] = useState();
  const imgBBkey = process.env.REACT_APP_ImaBB_Key;
  const { user } = useAuth();

  const [isUpdate, setIsUpdate] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // handel for get product details & image upload on imageBB and get link
  const handelAddProduct = (data) => {
    setIsUpdate(true);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgBBkey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const product = {
            product_name: data.product_name,
            resell_price: data.resell_price,
            original_price: data.original_price,
            years_of_use: data.years_of_use,
            category: data.category,
            condition: data.condition,
            product_statues: "unsold",
            seller_name: user.displayName,
            seller_email: user.email,
            seller_type: "new",
            seller_phone_num: data.phone_number,
            location: data.location,
            product_url: result.data.url,
            product_description: data.product_description,
            upload_time: new Date(),
          };
          handelAddProductBD(product);
        }
      })
      .catch((err) => {
        setUploadErr(err.message);
      });
  };

  // handel add product  to BD
  const handelAddProductBD = (details) => {
    fetch("http://localhost:5000/product/add", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(details),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Added Done");
          reset();
        }
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setIsUpdate(false);
      });
  };

  // from reset handel for user
  const handelReset = () => {
    const conformation = window.confirm("Want to reset?");
    if (conformation) {
      reset();
    }
  };

  // loading statement
  if (isUpdate) {
    return <Loading></Loading>;
  }
  return (
    <section className='mb-52'>
      <h2 className='text-3xl'>Add Product</h2>
      <div className=''>
        <form
          className='card-body mt-1 p-0'
          onSubmit={handleSubmit(handelAddProduct)}>
          {uploadErr && (
            <p className='text-error mt-1 capitalize text-center font-semibold'>
              {uploadErr}
            </p>
          )}
          {/* // Product name */}
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Product Name</span>
              <span
                onClick={handelReset}
                className='label-text-alt text-error font-semibold cursor-pointer btn btn-xs'>
                Reset
              </span>
            </label>
            <input
              type='text'
              className='input input-bordered'
              {...register("product_name", {
                required: "Must Need Your Product Name",
              })}
            />
            {errors.product_name && (
              <p className='text-error mt-1' role='alert'>
                {errors.product_name?.message}
              </p>
            )}
          </div>

          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 '>
            {/* Resell Price */}
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Resell Price (TK)</span>
              </label>
              <input
                type='number'
                className='input input-bordered'
                {...register("resell_price", {
                  required: "Resell Price is Required",
                })}
              />
              {errors.resell_price && (
                <p className='text-error mt-1' role='alert'>
                  {errors.resell_price?.message}
                </p>
              )}
            </div>
            {/* Original Price */}
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Original Price (TK)</span>
              </label>
              <input
                type='number'
                className='input input-bordered'
                {...register("original_price", {
                  required: "Original Price is Required",
                })}
              />
              {errors.original_price && (
                <p className='text-error mt-1' role='alert'>
                  {errors.original_price?.message}
                </p>
              )}
            </div>
            {/* Years Of Use */}
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Years Of Use</span>
              </label>
              <input
                type='number'
                className='input input-bordered'
                {...register("years_of_use", {
                  required: "Years Of Use is Required",
                })}
              />
              {errors.years_of_use && (
                <p className='text-error mt-1' role='alert'>
                  {errors.years_of_use?.message}
                </p>
              )}
            </div>
            {/* category */}
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Select Category</span>
              </label>
              <select
                {...register("category", {
                  required: "Product Category is required",
                })}
                className='select select-bordered'>
                <option value=''>Select...</option>
                <option value='sony'>Sony</option>
                <option value='cannon'>Canon</option>
                <option value='cannon'>Nikon</option>
                <option value='cannon'>GoPro</option>
              </select>
              {errors.category && (
                <p className='text-error mt-1' role='alert'>
                  {errors.category?.message}
                </p>
              )}
            </div>
            {/* condition */}
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Select Product Condition</span>
              </label>
              <select
                {...register("condition", {
                  required: "Product Condition is required",
                })}
                className='select select-bordered'>
                <option value=''>Select...</option>
                <option value='excellent'>Excellent</option>
                <option value='good'>Good</option>
                <option value='fair'>Fair</option>
              </select>
              {errors.condition && (
                <p className='text-error mt-1' role='alert'>
                  {errors.condition?.message}
                </p>
              )}
            </div>
            {/* Product Image */}
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>
                  Product Image (size: (400X225px))
                </span>
              </label>
              <input
                type='file'
                className='input input-bordered'
                {...register("image", {
                  required: "Product Image is required",
                })}
              />
              {errors.productImg && (
                <p className='text-error mt-1' role='alert'>
                  {errors.productImg?.message}
                </p>
              )}
            </div>
          </div>

          {/* end  */}

          <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2 '>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Phone Number</span>
              </label>
              <input
                type='tel'
                className='input input-bordered'
                {...register("phone_number", {
                  required: "Phone Number is required",
                  minLength: {
                    value: 11,
                    message: "Phone Number Length Must be 11 Characters",
                  },
                })}
              />
              {errors.phone_number && (
                <p className='text-error mt-1' role='alert'>
                  {errors.phone_number?.message}
                </p>
              )}
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Location</span>
              </label>
              <input
                type='text'
                className='input input-bordered'
                {...register("location", {
                  required: "Location is required",
                })}
              />
              {errors.location && (
                <p className='text-error mt-1' role='alert'>
                  {errors.location?.message}
                </p>
              )}
            </div>
          </div>

          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Product Description</span>
            </label>
            <textarea
              rows='5'
              className='textarea textarea-bordered'
              placeholder='Product Description'
              {...register("product_description", {
                required: "Product Description is required",
              })}
            />
            {errors.product_description && (
              <p className='text-error mt-1' role='alert'>
                {errors.product_description?.message}
              </p>
            )}
          </div>

          <div className='form-control mt-2'>
            <input
              className='btn btn-accent btn-wide mx-auto'
              type='submit'
              value='Add'
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddProduct;
