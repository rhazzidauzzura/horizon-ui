import InputField from "components/fields/InputField";
import SelectField from "components/fields/SelectField";
import { FcGoogle } from "react-icons/fc";
import Checkbox from "components/checkbox";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addMaster } from "store/action/ActionCreator";
import { practitionersFetch } from "store/action/ActionCreator";

export default function FormPractitioner() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const [name, setName] = useState("");
  const [nik, setNik] = useState("");
  const [gender, setGender] = useState("");
  const [nilai, setNilai] = useState("");
  const practitionerHeader = [];

  const practitioners = useSelector(
    (state) => state.practitioners.practitioners
  );
  useEffect(() => {
    dispatch(practitionersFetch());
  }, []);

  if (practitioners != undefined && practitioners.data) {
    for (const [key, value] of Object.entries(practitioners.data[0])) {
      if (key != "id") {
        practitionerHeader.push({
          Header: key ? key.toUpperCase() : "",
          accessor: key ? key : "",
        });
      }
    }
  }

  console.log(practitionerHeader);

  // const form = {
  //   name: name,
  //   nik: nik,
  //   gender: gender,
  //   nilai: nilai,
  // };

  const handleChange = (name, value) => {
    setForm({ ...form, [`${name}`]: value });
  };

  console.log("FORM", form);
  const handleSubmit = async () => {
    try {
      let data = JSON.stringify(form);
      dispatch(addMaster(form));
      navigate("/master-data/practitioner");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mt-10 mb-10 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-center">
      {/* Sign in section */}
      <div className="flex h-full w-full justify-center rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none sm:w-[100%]">
        <div className="flex-rows w-full text-center">
          <h4 className="mt-[6vh] mb-2 text-2xl font-bold text-navy-700 dark:text-white">
            PRACTITIONER
          </h4>
          <div className="mt-[6vh] grid w-full grid-cols-2 flex-col items-center gap-4 pl-4 pr-4 text-start sm:pl-4 sm:pr-4 md:grid-cols-2 md:pl-4 md:pr-4 lg:pl-4 ">
            {/* Email */}
            {practitionerHeader.length > 0 &&
              practitionerHeader.map((x, idx) => {
                let data = "";
                if (x.accessor == "Gender") {
                  data = (
                    <SelectField
                      variant="auth"
                      extra="mb-3"
                      label="Gender"
                      placeholder="Select Gender"
                      id="gender"
                      value={["Laki-Laki", "Perempuan"]}
                      onDataChange={(name, value) => handleChange(name, value)}
                    />
                  );
                } else {
                  data = (
                    <InputField
                      variant="auth"
                      extra="mb-3"
                      label={x.Header}
                      placeholder={`Input ${x.accessor}...`}
                      id={x.accessor}
                      type="text"
                      name={x.accessor}
                      // onDataChange={(value,) => setName(value)}
                      onDataChange={(name, value) => handleChange(name, value)}
                    />
                  );
                }
                return data;
              })}
            {/* <InputField
              variant="auth"
              extra="mb-3"
              label="Name"
              placeholder="auzzura"
              id="name"
              type="text"
              name="name"
              onDataChange={(value) => setName(value)}
            /> */}

            {/* Password */}
            {/* <InputField
              variant="auth"
              extra="mb-3"
              label="NIK"
              placeholder="Min. 8 characters"
              id="nik"
              type="number"
              name="nik"
              onDataChange={(value) => setNik(value)}
            /> */}

            {/* Password */}
            {/* <InputField
              variant="auth"
              extra="mb-3"
              label="Nilai"
              placeholder="Persentase(%)"
              id="nilai"
              type="number"
              name="nilai"
              onDataChange={(value) => setNilai(value)}
            /> */}
          </div>
          <div className="mt-6 flex justify-end px-4 sm:w-[100%]">
            <button
              onClick={handleSubmit}
              className="linear mt-6  mb-12 mr-2 w-[25%] rounded-xl bg-gray-700 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-gray-600 active:bg-brand-700 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:active:bg-brand-200 sm:w-[100px] md:w-[10%] lg:w-[10%] "
            >
              Close
            </button>
            <button
              onClick={handleSubmit}
              className="linear  mt-6 mb-12 w-[25%] rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200 sm:w-[100px] md:w-[10%] lg:w-[10%] "
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
