"use client";

import { clsx } from "clsx";
import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  email: string;
  message: string;
};

export default function DesignBaseInput() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <div className="flex flex-col gap-8">
      <div className="font-primary text-6xl font-bold text-orange5">Form</div>
      <form
        className="flex flex-col gap-6 w-full max-w-4xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          {...register("email", { required: true })}
          type="text"
          className="font-primary text-lg font-normal px-6 py-2 border-2 border-light-green rounded-lg outline-none transition-all focus:border-strong-green"
          placeholder="Enter your email*"
        />
        <textarea
          {...register("message", { required: true })}
          className="font-primary text-lg font-normal px-6 py-2 min-h-36 border-2 border-light-green rounded-lg outline-none transition-all focus:border-strong-green"
          placeholder="Enter your message*"
        />
        <input
          type="submit"
          className={clsx(
            "font-primary text-lg font-semibold text-orange8 w-fit px-6 py-2 rounded-3xl cursor-pointer transition-all border-2 border-orange8 bg-light-green hover:bg-orange8 hover:border-orange8 hover:text-white",
            (errors.email || errors.message) &&
              "!cursor-not-allowed !border-gray-300 !bg-gray-300 !text-white"
          )}
          disabled={!!errors.email || !!errors.message}
        ></input>
      </form>
    </div>
  );
}
