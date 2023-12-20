import InputField from "components/fields/InputField";
import SelectField from "components/fields/SelectField";
import { FcGoogle } from "react-icons/fc";
import Checkbox from "components/checkbox";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addMaster } from "store/action/ActionCreator";

export default function FormPractitionerView() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [nik, setNik] = useState("");
  const [gender, setGender] = useState("");
  const [nilai, setNilai] = useState("");

  const form = {
    name: name,
    nik: nik,
    gender: gender,
    nilai: nilai
  }

 
  console.log(form);
  const handleSubmit = async () => {
    try {
      // let data = JSON.stringify(form)
      console.log("FORM", form);
      dispatch(addMaster(form))
      navigate('/list/master-data')
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mt-10 mb-10 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-center">
      {/* Sign in section */}
      <div className="flex justify-center rounded-[20px] w-[60%] h-full bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none">
        <div className="mt-[5vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
          <h4 className="mb-2.5 text-2xl font-bold text-navy-700 dark:text-white flex justify-center">
            Master Data
          </h4>
          <div className="mt-[10vh]">
              {/* Email */}
            <InputField
              variant="auth"
              extra="mb-3"
              label="Name"
              placeholder="auzzura"
              id="name"
              type="text"
              name="name"
              onDataChange = {(value) => setName(value)}
            />

            {/* Password */}
            <InputField
              variant="auth"
              extra="mb-3"
              label="NIK"
              placeholder="Min. 8 characters"
              id="nik"
              type="number"
              name="nik"
              onDataChange = {(value) => setNik(value)}

            />
            <SelectField
              variant="auth"
              extra="mb-3"
              label="Gender"
              placeholder="Select Gender"
              id="gender"
              value = {["Laki-Laki", "Perempuan"]}
              onDataChange={(value) => setGender(value)}
            />

            {/* Password */}
            <InputField
              variant="auth"
              extra="mb-3"
              label="Nilai"
              placeholder="Persentase(%)"
              id="nilai"
              type="number"
              name='nilai'
              onDataChange = {(value) => setNilai(value)}

            />
          </div>
         
          <button onClick={handleSubmit} className="linear mt-2 mb-12 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
