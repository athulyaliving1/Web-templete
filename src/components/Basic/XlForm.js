import React, { useState } from "react";
import Swal from "sweetalert2";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup
  .object({
    name: yup.string().required().min(3).max(15),
    email: yup
      .string()
      .email("That doesn't look like a valid email")
      .required("This field is required."),
    number: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .min(10)
      .max(10)
      .required(),

    textarea: yup
      .string()
      .matches(/^[A-Za-z ]*$/, "Please enter text only")
      .min(10)
      .max(40)
      .required(),
  })
  .required();

export default function XlForm() {
  // const [status, setStatus] = useState("Submit");
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setTextarea] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const sendDataToAPI = async () => {
    if (!name || !number || !email || !textarea) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    await axios.post("http://162.241.222.86:5000/contact", {
      name,
      number,
      email,
      textarea,
    });

    // Swal.fire({
    //   icon: "success",
    //   title: "Our Message Has Been Sent!",
    //   text: "Our Team Will Contact You Shortly  ",
    //   showConfirmButton: false,
    //   timer: 2000,
    // });

    navigate("/tkpage");

    setTimeout(function () {
      window.location.reload(1);
    }, 2000);
  };

  return (
    <div className="bg-sky-900 ">
      {/* 2xl Large devices */}
      <div className="container mx-auto">
        <div className=" p-3 xl:block hidden font-Ubuntu">
          <form
            onSubmit={handleSubmit(sendDataToAPI)}
            class="p-6  flex flex-col justify-center"
          >
            <div className="grid grid-flow-col  md:grid-cols-5 space-x-5">
              <div className="flex flex-col">
                <input
                  {...register("name")}
                  type="text"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Your Name"
                  className="form-control block w-full px-3 py-3  font-semibold text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-pink-500 focus:outline-none"
                  name="name"
                />
                <p className="text-pink-500 font-semibold">
                  {errors.name?.message}
                </p>
              </div>

              <div className="flex flex-col">
                <input
                  {...register("email")}
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  className=" form-control block w-full px-3 py-3  font-semibold text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-pink-500 focus:outline-none "
                  name="email"
                />
                <p className="text-pink-500  font-semibold">
                  {errors.email?.message}
                </p>
              </div>

              <div className="flex flex-col">
                <input
                  {...register("number")}
                  type="number"
                  id="number"
                  onChange={(e) => setNumber(e.target.value)}
                  placeholder="Enter Your Number"
                  className="form-control block w-full px-3 py-3  font-semibold text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-pink-500 focus:outline-none"
                  name="number"
                />
                <p className="text-pink-500  font-semibold">
                  {errors.number?.message}
                </p>
              </div>

              <div className="flex flex-col">
                <input
                  {...register("textarea")}
                  id="textarea"
                  onChange={(e) => setTextarea(e.target.value)}
                  placeholder="Enter Your Message"
                  rows="1"
                  class="form-control block w-full px-3 py-3  font-semibold text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-pink-500 focus:outline-none "
                  name="textarea"
                />
                <p className="text-pink-500  font-semibold">
                  {errors.textarea?.message}
                </p>
              </div>

              <div className=" justify-center ">
                <button
                  class=" bg-pink-600  text-white font-bold py-3 px-6 rounded-lg   hover:ring-4 ring-sky-700 transition ease-in-out duration-100"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
