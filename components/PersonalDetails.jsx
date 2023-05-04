import React, { useState } from "react";
import { ErrorMessage, Field } from "formik";
import Select from "react-select";
import WizardStep from "./WizardStep";

const options = [
  { value: "Mechanical", label: "Mechanical" },
  { value: "Electrical", label: "Electrical" },
  { value: "Computer Science", label: "Computer Science" },
];

const PersonalDetails = ({ onSubmit, validationSchema }) => {
  return (
    <>
      <WizardStep onSubmit={onSubmit} validationSchema={validationSchema}>
        <ol className="list-decimal">
          <li>
            <div className="my-4">
              <label
                htmlFor="postAppliedFor"
                className="font-ruda font-medium text-gray-700 pr-4"
              >
                Post Applied For:
              </label>
              <Field
                component="input"
                id="postAppliedFor"
                name="postAppliedFor"
                placeholder="Post Applied For"
                type="text"
                className="w-1/3 px-4 py-2 rounded bg-gray-300"
              />
              <ErrorMessage
                className="error"
                component="div"
                name="postAppliedFor"
              />
            </div>
          </li>
          <div className="my-4">
            <label htmlFor="department" className="block font-medium">
              Department
            </label>
            <Select id="department" options={options} />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <li>
              <div className="my-4">
                <label
                  htmlFor="firstName"
                  className="font-ruda font-medium text-gray-700 pr-4"
                >
                  First Name:
                </label>
                <Field
                  autoComplete="given-name"
                  component="input"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  type="text"
                  className="w-full px-4 py-2 rounded bg-gray-300"
                />
                <ErrorMessage
                  className="error"
                  component="div"
                  name="firstName"
                />
              </div>
            </li>

            <div className="my-4">
              <label
                htmlFor="middleName"
                className="font-ruda font-medium text-gray-700 pr-4"
              >
                Middle Name:
              </label>
              <Field
                component="input"
                id="middleName"
                name="middleName"
                placeholder="Middle Name"
                type="text"
                className="w-full px-4 py-2 rounded-md bg-gray-300"
              />
              <ErrorMessage
                className="error"
                component="div"
                name="middleName"
              />
            </div>
            <div className="my-4">
              <label
                htmlFor="lastName"
                className="font-ruda font-medium text-gray-700 pr-4"
              >
                Last Name:
              </label>
              <Field
                component="input"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                type="text"
                className="w-full px-4 py-2 rounded-md bg-gray-300"
              />
              <ErrorMessage className="error" component="div" name="lastName" />
            </div>
          </div>
          <li>
            <div className="my-4">
              <label
                htmlFor="dateOfBirth"
                className="font-ruda font-medium text-gray-700 pr-4"
              >
                Date of Birth:
              </label>
              <Field
                id="dateOfBirth"
                name="dateOfBirth"
                placeholder="Date of Birth"
                type="date"
                className="w-1/5 px-4 py-2 rounded-md bg-gray-300"
              />
              <ErrorMessage
                className="error"
                component="div"
                name="dateOfBirth"
              />
            </div>
          </li>
          <li>
            <div className="font-ruda font-medium text-gray-700 pr-4 my-4">
              <label
                htmlFor="maritalStatus"
                className="font-ruda font-medium text-gray-700 pr-4"
              >
                Marital Status:
              </label>
              <Field
                type="radio"
                id="single"
                name="maritalStatus"
                value="single"
              />
              <label
                htmlFor="single"
                className="font-ruda font-medium text-gray-700 pr-4"
              >
                Single
              </label>
              <Field
                type="radio"
                id="married"
                name="maritalStatus"
                value="married"
              />
              <label
                htmlFor="married"
                className="font-ruda font-medium text-gray-700 pr-4"
              >
                Married
              </label>
            </div>
            <ErrorMessage
              className="error"
              component="div"
              name="maritalStatus"
            />
          </li>
          <li>
            <div className="my-4">
              <label
                htmlFor="nationality"
                className="font-ruda font-medium text-gray-700 pr-4"
              >
                Nationality:
              </label>
              <Field
                component="input"
                id="nationality"
                name="nationality"
                placeholder="Nationality"
                type="text"
                className="w-1/5 px-4 py-2 rounded-md bg-gray-300"
              />
            </div>
          </li>
          <li>
            <div className="font-ruda font-medium text-gray-700 pr-4 my-4">
              <label htmlFor="gender" className="block font-medium">
                Gender
              </label>
              <Field type="radio" id="male" name="gender" value="male" />
              <label
                htmlFor="male"
                className="font-ruda font-medium text-gray-700 pr-4"
              >
                Male
              </label>
              <Field type="radio" id="female" name="gender" value="female" />
              <label
                htmlFor="female"
                className="font-ruda font-medium text-gray-700 pr-4"
              >
                Female
              </label>
              <Field type="radio" id="other" name="gender" value="other" />
              <label
                htmlFor="Other"
                className="font-ruda font-medium text-gray-700 pr-4"
              >
                Other
              </label>
            </div>
          </li>
          <li>
            <div className="font-ruda font-medium text-gray-700 pr-4 my-4">
              <h4>Address</h4>
              <div>
                <label htmlFor="permanentAddress" className="block font-medium">
                  Permanent Address
                </label>
                <Field
                  component="textarea"
                  id="permanentAddress"
                  name="permanentAddress"
                  placeholder="Permanent Address"
                  type="text"
                  className="w-1/3 px-4 py-2 rounded-md bg-gray-300"
                />

                <label htmlFor="presentAddress" className="block font-medium">
                  Present Address
                </label>
                <Field
                  component="textarea"
                  id="presentAddress"
                  name="presentAddress"
                  placeholder="Present Address"
                  type="text"
                  className="w-1/3 px-4 py-2 rounded-md bg-gray-300"
                />
                <ErrorMessage
                  className="error"
                  component="div"
                  name="presentAddress"
                />
                <label htmlFor="designation" className="block font-medium">
                  Email Address
                </label>
                <input
                  type="text"
                  id="designation"
                  className="w-1/3 px-4 py-2 rounded-md bg-gray-300"
                />
              </div>
            </div>
          </li>
          <li>
            <div className="font-ruda font-medium text-gray-700 pr-4 my-4">
              <h4>Phone Number</h4>
              <div>
                <label htmlFor="designation" className="block font-medium">
                  Office
                </label>
                <input
                  type="text"
                  id="designation"
                  className="w-1/3 px-4 py-2 rounded-md bg-gray-300"
                />

                <label htmlFor="designation" className="block font-medium">
                  Mobile
                </label>
                <input
                  type="text"
                  id="designation"
                  className="w-1/3 px-4 py-2 rounded-md bg-gray-300"
                />
                <label htmlFor="designation" className="block font-medium">
                  *Landline
                </label>
                <input
                  type="text"
                  id="designation"
                  className="w-1/3 px-4 py-2 rounded-md bg-gray-300"
                />
              </div>
            </div>
          </li>
        </ol>
      </WizardStep>
    </>
  );
};

export default PersonalDetails;
