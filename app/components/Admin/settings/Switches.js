import React, { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import AppData from "../../../config/appData.json";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Toast from "../../Toast";

const Switches = () => {
  const [id, setId] = useState();
  console.log(id);
  const [toastInfo, setToastInfo] = useState(null);
  const [switches, setSwitches] = useState();
  const [loading, setLoading] = useState(false);

  const data = switches?.data?.data;

  const closeToast = () => {
    setToastInfo(null);
  };

  const schema = yup.object().shape({
    status: yup.string().required("status is required!"),
  });

  const token = localStorage.getItem("token");

  const handleSwitch = async (requestData) => {
    try {
      const endpoint = `${AppData.BASE_URL}settings/switch/${id}`;

      const response = await axios.patch(endpoint, requestData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response);
      setToastInfo({ message: response?.data?.data?.message, type: "success" });
    } catch (error) {
      console.log("Error", error);
      // setMessage(error.response?.data?.error || "An error occurred");
      setToastInfo({ message: "Error making the API call", type: "error" });
    }
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${AppData.BASE_URL}settings/all-switch`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        setSwitches(response);
        setLoading(false);
      })
      .catch(function (error) {});
  }, [token]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div>
      <p className="text-[#3483F5] text-lg mt-5">Switch Settings</p>

      <p className="text-[#DD7F00] ">You can only select one at a time</p>
      <form action="" onSubmit={handleSubmit(handleSwitch)}>
        {loading ? (
          "...Loading"
        ) : (
          <div className="flex items-center gap-7 mt-10">
            {data?.map((item, index) => (
              <button
                type="submit"
                name="status"
                id="status"
                {...register("status")}
                onClick={() => {
                  setValue("status", true);
                  setId(item._id);
                }}
                key={index}
                className={`border-[1.5px] ${
                  item.status == true
                    ? "border-[#075A43] bg-[#E2F4EF]"
                    : "border-[#000000] bg-[#ADADAD80]"
                }  flex flex-col items-start w-[10rem] rounded-md p-3`}
              >
                <p>{item.status == false ? "Off" : "On"}</p>
                <p className="font-semibold text-lg">{item.name}</p>
              </button>
            ))}
          </div>
        )}
      </form>
      {toastInfo && (
        <Toast
          message={toastInfo.message}
          type={toastInfo.type}
          onClose={closeToast}
        />
      )}
    </div>
  );
};

export default Switches;
