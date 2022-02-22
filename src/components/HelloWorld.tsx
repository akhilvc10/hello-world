import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, CircularProgress } from "@mui/material";

const HelloWorld: React.FC = () => {
  const [file, setFile] = useState<any>(null);
  const [isUploaded, setIsUploaded] = useState<String>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const files = e?.target?.files;
    setFile(files);
    console.log("file", files);
  };

  const UploadFn = async () => {
    try {
      if (file) {
        const response = await axios(
          `https://vnyf1xk8d8.execute-api.us-east-1.amazonaws.com/getPreSignedUrl`,
          {
            method: "POST",
            data: {
              fileName: file[0].name
            }
          }
        );
        return response;
      }
    } catch (error) {
      return error;
    }
  };
  const uploadFileHandler = async () => {
    setIsUploaded("started");
    try {
      const response = await UploadFn();
      if (response?.status === "success") {
        const url = response?.presignedUrl;
        const res = await axios.put(url, file);
        if (res.status === 200) {
          setIsUploaded("uploaded");
        }
        return res;
      }
    } catch (error) {
      return error;
    }
  };
  useEffect(() => {
    if (file) {
      uploadFileHandler();
    }
  }, [file]);

  return (
    <>
      {/* <div data-testid="hello">Hello world</div>
      <input
        data-testid="element"
        type="file"
        onChange={(e) => handleChange(e)}
      />
      {isUploaded && (
        <span id="upload" data-testid="handler">
          Uploaded successfully
        </span>
      )} */}
      <div data-testid="hello">Hello world</div>
      <div className="button-wrapper">
        <span className="label">Select File</span>
        <input
          type="file"
          data-testid="element"
          id="upload"
          className="upload-box"
          onChange={(e) => handleChange(e)}
        />
        <span>{file && file[0].name}</span>
      </div>

      <span>
        {isUploaded === "uploaded" ? (
          <Alert
            severity="success"
            sx={{ width: "220px", margin: "20px auto" }}
            data-testid="handler"
            id="uploaded"
          >
            File Uploaded Successfully
          </Alert>
        ) : isUploaded === "started" ? (
          <CircularProgress />
        ) : (
          ""
        )}
      </span>
    </>
  );
};

export default HelloWorld;
