import React from "react"

import { useForm } from "react-hook-form"
import "../../style/form.pcss"

export const SquidForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const submitFormHandler = (formPayload) => {
    console.log(formPayload)
  }

  return (
    <div className="page-body">
      <h1>Let&apos;s Create A New Squid</h1>
      <form onSubmit={handleSubmit(submitFormHandler)}>
        <input
          type="text"
          name="name"
          placeholder="Name..."
          {...register("name", { required: "Name is required" })}
        />
        <br />
        <input
          type="text"
          placeholder="Species..."
          {...register("species", { required: "Species is required" })}
        />
        <br />
        <input type="text" placeholder="Special Power..." {...register("specialPower")} />
        <br />
        <input
          type="text"
          placeholder="Experience Points..."
          {...register("experiencePoints", { required: "Experience Points is required" })}
        />
        <br />
        <input type="submit" className="submit-button" /> <br />
        {errors.name && errors.name.message} <br />
        {errors.species && errors.species.message} <br />
        {errors.experiencePoints && errors.experiencePoints.message}
      </form>
    </div>
  )
}
