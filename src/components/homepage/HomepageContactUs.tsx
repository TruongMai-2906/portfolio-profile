"use client";

import { clsx } from "clsx";
import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  email: string;
  message: string;
};

export default function HomepageContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <div className="py-16 px-x pb-20">
      <div className="font-primary text-xl font-bold tracking-custom text-center text-orange5">
        CONTACT US
      </div>
      <h2 className="font-primary text-5xl font-bold text-center mt-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br />
      </h2>
      <div className="mt-16 flex flex-col justify-center items-center">
        <form
          className="flex flex-col gap-6 w-full max-w-4xl justify-center items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            {...register("email", { required: true })}
            type="text"
            className="font-primary text-lg font-normal w-full px-6 py-2 border-2 border-dark rounded-lg outline-none transition-all focus:border-orange5"
            placeholder="Enter your email*"
          />
          <textarea
            {...register("message", { required: true })}
            className="font-primary text-lg font-normal w-full px-6 py-2 min-h-60 border-2 border-dark rounded-lg outline-none transition-all focus:border-orange5"
            placeholder="Enter your message*"
          />
          <input
            type="submit"
            className={clsx(
              "font-primary text-lg font-semibold text-grey w-fit px-6 py-2 rounded-3xl cursor-pointer transition-all border-2 border-orange8 bg-orange8 hover:bg-orange5 hover:border-orange5",
              (errors.email || errors.message) &&
                " text-white !cursor-not-allowed !border-gray-300 !bg-gray-300"
            )}
            disabled={!!errors.email || !!errors.message}
          ></input>
        </form>
      </div>
    </div>
  );
}
