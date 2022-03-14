/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { useState } from "react"

import { useForm } from "react-hook-form"

import "../../style/form.pcss"
import { ApiClient } from "../../backend/ApiClient"

export const SquidForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const addNewSquid = async (formPayload) => {
    ApiClient.post("/squids", { params: { formPayload } })
  }

  const [showForm, setShowForm] = useState("hide-form")
  const toggleShowForm = () => {
    if (showForm === "hide-form") {
      setShowForm("")
    } else {
      setShowForm("hide-form")
    }
  }

  return (
    <>
      <h1
        role="button"
        className="form__header"
        onClick={toggleShowForm}
        onKeyDown={toggleShowForm}
      >
        Add a Squid
      </h1>
      <form onSubmit={handleSubmit(addNewSquid)} className={`add-squid-form  ${showForm}`}>
        <label htmlFor="name" className="form__label">
          Name:
          <input
            type="text"
            name="name"
            id="name"
            className="form__input-field"
            {...register("name", { required: "Name is required" })}
          />
        </label>
        <br />
        <label htmlFor="species" className="form__label">
          Species:
          <input
            type="text"
            id="species"
            className="form__input-field"
            {...register("species", { required: "Species is required" })}
          />
        </label>
        <br />
        <label htmlFor="specialPower" className="form__label">
          Special Power:
          <select
            type="text"
            id="specialPower"
            className="form__select-field"
            {...register("specialPower")}
          >
            <option value="none"> </option>
            <option value="ink">Ink</option>
            <option value="camouflage">Camouflage</option>
            <option value="bioluminescence">Bioluminescence</option>
            <option value="change color">Change color</option>
          </select>
        </label>
        <br />
        <label htmlFor="experiencePoints" className="form__label">
          Experience Points:
          <input
            type="text"
            id="experiencePoints"
            className="form__input-field"
            {...register("experiencePoints", { required: "Experience Points is required" })}
          />
        </label>
        <br />
        <input type="submit" className="form__submit-button" /> <br />
        {errors.name && errors.name.message} <br />
        {errors.species && errors.species.message} <br />
        {errors.experiencePoints && errors.experiencePoints.message}
      </form>
    </>
  )
}
