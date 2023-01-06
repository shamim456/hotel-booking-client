import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { set, useForm } from "react-hook-form";

const HostYourHome = () => {
  const [districs, setDistrics] = useState([]);

  // react hook form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  //fetch distric data
  useEffect(() => {
    fetch("https://parseapi.back4app.com/classes/City?limit=65&order=name", {
      headers: {
        "X-Parse-Application-Id": "njETZajOzoVxthoGdgRJ2QKYlzOjidPfH0fyyKQN", // This is the fake app's application id
        "X-Parse-Master-Key": "ZWdootuhzatrHdTOVCtLm3EHNAwntUeUXIf4OY5E", // This is the fake app's readonly master key
      },
    })
      .then((res) => res.json())
      .then((data) => setDistrics(data.results));
  }, []);

console.log(districs)
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/*Hotel Name Input*/}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">What Is Your Hotel Name?</span>
          </label>
          <input
            type="text"
            placeholder="Write Your Hotel Name"
            className="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Hotel Name Is Required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt">{errors.name.message}</span>
            )}
          </label>
        </div>

        {/*Hotel Title Input*/}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">What Is Your Hotel Title?</span>
          </label>
          <input
            type="text"
            placeholder="Write Your Hotel Title"
            className="input input-bordered w-full max-w-xs"
            {...register("title", {
              required: {
                value: true,
                message: "Hotel Title Is Required",
              },
            })}
          />
          <label className="label">
            {errors.title?.type === "required" && (
              <span className="label-text-alt">{errors.title.message}</span>
            )}
          </label>
        </div>

        {/*Hotel Location Input*/}
        <label className="label">
          <span className="label-text">What Is Your Hotel Location?</span>
        </label>
        <select className="select select-bordered w-full max-w-xs">
          <option selected>Dhaka, Bangladesh</option>
          {districs.map(distric => <option key={distric.cityId}>{`${distric.name}, ${distric.country}`}</option>)}
        </select>

        {/*Hotel Single Room Input*/}
        <label className="label">
          <span className="label-text">Total Single Room?</span>
        </label>
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            1
          </option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
          <option>13</option>
          <option>14</option>
          <option>15</option>
        </select>
        {/*Hotel Couple Room Input*/}
        <label className="label">
          <span className="label-text">Total Couple Room?</span>
        </label>
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            1
          </option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
          <option>13</option>
          <option>14</option>
          <option>15</option>
        </select>
        {/*Hotel Family Room Input*/}
        <label className="label">
          <span className="label-text">Total Family Room?</span>
        </label>
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            1
          </option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
          <option>13</option>
          <option>14</option>
          <option>15</option>
        </select>

        {/*Hotel Single Room Price Input*/}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Single Room Price?</span>
          </label>
          <input
            type="number"
            placeholder="Single Room Price?"
            className="input input-bordered w-full max-w-xs"
            {...register("singleRoomPrice", {
              required: {
                value: true,
                message: "Price Is Required",
              },
            })}
          />
          <label className="label">
            {errors.singleRoomPrice?.type === "required" && (
              <span className="label-text-alt">
                {errors.singleRoomPrice.message}
              </span>
            )}
          </label>
        </div>
        {/*Hotel Couple Room Price Input*/}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Couple Room Price?</span>
          </label>
          <input
            type="number"
            placeholder="Couple Room Price?"
            className="input input-bordered w-full max-w-xs"
            {...register("coupleRoomPrice", {
              required: {
                value: true,
                message: "Price Is Required",
              },
            })}
          />
          <label className="label">
            {errors.coupleRoomPrice?.type === "required" && (
              <span className="label-text-alt">
                {errors.coupleRoomPrice.message}
              </span>
            )}
          </label>
        </div>
        {/*Hotel Family Room Price Input*/}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Family Room Price?</span>
          </label>
          <input
            type="number"
            placeholder="Family Room Price?"
            className="input input-bordered w-full max-w-xs"
            {...register("familyRoomPrice", {
              required: {
                value: true,
                message: "Price Is Required",
              },
            })}
          />
          <label className="label">
            {errors.familyRoomPrice?.type === "required" && (
              <span className="label-text-alt">
                {errors.familyRoomPrice.message}
              </span>
            )}
          </label>
        </div>
        {/*Hotel Service Fee Input*/}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Service Fee?</span>
          </label>
          <input
            type="number"
            placeholder="Service Fee?"
            className="input input-bordered w-full max-w-xs"
            {...register("serviceFee", {
              required: {
                value: true,
                message: "Price Is Required",
              },
            })}
          />
          <label className="label">
            {errors.serviceFee?.type === "required" && (
              <span className="label-text-alt">
                {errors.serviceFee.message}
              </span>
            )}
          </label>
        </div>
        {/*Hotel Cleaning Input*/}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Cleaning Fee?</span>
          </label>
          <input
            type="number"
            placeholder="Cleaning Fee?"
            className="input input-bordered w-full max-w-xs"
            {...register("cleaningFee", {
              required: {
                value: true,
                message: "Price Is Required",
              },
            })}
          />
          <label className="label">
            {errors.cleaningFee?.type === "required" && (
              <span className="label-text-alt">
                {errors.cleaningFee.message}
              </span>
            )}
          </label>
        </div>
        {/*Hotel Contact Number Input*/}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Phone Number?</span>
          </label>
          <input
            type="text"
            placeholder="01700000000"
            className="input input-bordered w-full max-w-xs"
            {...register("phoneNumber", {
              required: {
                value: true,
                message: "Phone Number Is Required",
              },
            })}
          />
          <label className="label">
            {errors.cleaningFee?.type === "required" && (
              <span className="label-text-alt">
                {errors.cleaningFee.message}
              </span>
            )}
          </label>
        </div>

        <input type="submit" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default HostYourHome;
