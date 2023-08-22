"use client";
import React, { useRef, useState } from "react";

import Image from "next/image";
import { Icon } from "@iconify/react";

const FileUploader = () => {
  const [files, setFile] = useState([]);
  const [message, setMessage] = useState();
  const handleFile = (e) => {
    setMessage("");
    let file = e.target.files;

    for (let i = 0; i < file.length; i++) {
      const fileType = file[i]["type"];
      const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
      if (validImageTypes.includes(fileType)) {
        setFile([...files, file[i]]);
      } else {
        setMessage("only images accepted");
      }
    }
  };
  const removeImage = (i) => {
    setFile(files.filter((x) => x.name !== i));
  };

  return (
    <>
      <div className=" flex justify-center items-center px-2">
        <div className="p-3 md:w-1/2 rounded-md">
          <span className="flex justify-center items-center  text-[12px] mb-1 text-red-500">
            {message}
          </span>
          <div className=" relative shadow-md border-2 items-center p-4 rounded-lg cursor-pointer   border-[#3483F5] border-dashed">
            <input
              type="file"
              onChange={handleFile}
              className="h-full w-full opacity-0 z-10 absolute"
              multiple="multiple"
              name="files[]"
            />

            <div className="text-[#777777] text-sm ">
              <div className="flex justify-center  ">
                <p className="bg-[#3483F5] rounded-full p-2">
                  <Icon icon="la:id-card-solid" width={30} color="white" />
                </p>
              </div>
              <p className=" text-center mt-1">
                Click Here To Upload Your ID Card here
              </p>
              <p className="text-center my-1">Or</p>

              <p className="text-center "> Drag Files Here</p>
            </div>
          </div>
          <div className="flex flex-wrap  gap-2 mt-2">
            {files.map((file, key) => {
              return (
                <div
                  key={key}
                  className="w-full flex items-center border-2 border-[#D5D5D5] justify-between rounded-lg p-2"
                >
                  <div className="flex flex-row items-center gap-2">
                    <div className="h-10 w-10">
                      <Image
                        className="w-full h-full rounded"
                        src={URL.createObjectURL(file)}
                        width={50}
                        height={50}
                        alt="Id Card"
                      />
                    </div>
                    <span className="truncate w-20">{file.name}</span>
                  </div>
                  <div
                    onClick={() => {
                      removeImage(file.name);
                    }}
                    className=""
                  >
                    <Icon icon="ph:x-circle-fill" color="#DE2525" width={30} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FileUploader;
