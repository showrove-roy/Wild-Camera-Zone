import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const [uploadErr, setUploadErr] = useState();
  // get From-hook function
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const handelImgUpload = (data) => {
    console.log(
      "🚀 ~ file: AddProduct.js ~ line 15 ~ handelImgUpload ~ data",
      data
    );
  };

  const handelReset = () => {
    const conformation = window.confirm("Want to reset?");
    if (conformation) {
      reset();
    }
  };

  return (
    <section className='mb-10'>
      <h2 className='text-3xl'>Add Product</h2>
      <div className=''>
        <form
          className='card-body mt-1 p-0'
          onSubmit={handleSubmit(handelImgUpload)}>
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

          {/* Price section */}
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 '>
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
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Product Image (size: )</span>
              </label>
              <input
                type='file'
                accept='image/*'
                className='input input-bordered'
                {...register("product_img", {
                  required: "Product Image is required",
                })}
              />
              {errors.product_img && (
                <p className='text-error mt-1' role='alert'>
                  {errors.product_img?.message}
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
