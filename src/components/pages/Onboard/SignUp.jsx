import { useState } from "react";
import clsx from "clsx";
import { useLoginFormValidator } from "../Onboard/useLoginFormValidator";
import { NavLink } from "react-router-dom";
import sideImage from "../../../assets/sideImage.png";

const SignUp = (props) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { errors, validateForm, onBlurField } = useLoginFormValidator(form);

  const onUpdateField = (e) => {
    const field = e.target.name;
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextFormState);
    if (errors[field].dirty)
      validateForm({
        form: nextFormState,
        errors,
        field,
      });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    const { isValid } = validateForm({ form, errors, forceTouchErrors: true });
    if (!isValid) return;
    alert(JSON.stringify(form, null, 2));
  };

  return (
    <div className="my-6 mx-4">
      <div className="flex flex-col justify-evenly items-center md:flex-row">
        <div>
          <h2 className="text-2xl font-bold">SignUp on Exclusive</h2>
          <p className="text-xs pb-5">Enter Your Details Below</p>
          <form onSubmit={onSubmitForm} className="flex flex-col ">
            {/* Email */}
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onUpdateField}
              placeholder="Email"
              onBlur={onBlurField}
              className={clsx(
                errors.email.dirty &&
                  errors.email.error &&
                  "border-[#e11d48] border-1 border-solid"

              )}
            />
            {errors.email.dirty && errors.email.error ? (
              <p className="text-[#e11d48]">
                {errors.email.message}
              </p>
            ) : null}

            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={onUpdateField}
              placeholder="Password"
              onBlur={onBlurField}
              className={clsx(
                errors.password.dirty &&
                  errors.password.error &&
                  "border-[#e11d48] border-1 border-solid"

              )}
            />
            {errors.password.dirty && errors.password.error ? (
              <p className="text-[#e11d48]">
                {errors.password.message}
              </p>
            ) : null}

            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={onUpdateField}
              placeholder="Confirm Password"
              onBlur={onBlurField}
              className={clsx(
                errors.confirmPassword.dirty &&
                  errors.confirmPassword.error &&
                  "border-[#e11d48] border-1 border-solid"
              )}
            />
            {errors.confirmPassword.dirty && errors.confirmPassword.error ? (
              <p className="text-[#e11d48]">
                {errors.confirmPassword.message}
              </p>
            ) : null}

            <div className="flex justify-between items-center py-6">
              <span>
                <button
                  type="submit"
                  className="bg-red-600 text-white text-xs py-2 px-4 rounded"
                >
                  SignUp
                </button>
              </span>
              <span>
                <NavLink to="/login" className="text-xs text-red-600">
                  Already have an account?
                </NavLink>
              </span>
            </div>
          </form>
        </div>
        <div>
          <img src={sideImage} width={400} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
