import React, { useState } from "react";
import { singleFileUpload, multipleFilesUpload } from "../data/api";

const FileUploadScreen = (props) => {
  const [singleFile, setSingleFile] = useState("");
  const [multipleFiles, setMultipleFiles] = useState("");
  const [title, setTitle] = useState("");

  const SingleFileChange = (e) => {
    setSingleFile(e.target.files[0]);
  };
  const MultipleFileChange = (e) => {
    setMultipleFiles(e.target.files);
  };

  const uploadSingleFile = async () => {
    const formData = new FormData();
    formData.append("file", singleFile);
    await singleFileUpload(formData);
    props.getSingle();
  };

  const uploadMultipleFiles = async () => {
    const formData = new FormData();
    formData.append("title", title);
    for (let i = 0; i < multipleFiles.length; i++) {
      formData.append("files", multipleFiles[i]);
    }
    await multipleFilesUpload(formData);
    props.getMulti();
  };

  return (
    <div className="row mt-3">
      <div className="col-6">
        <div className="form-group">
          <label htmlFor="">Select Single File</label>
          <input
            type="file"
            className="form-control"
            onChange={(e) => SingleFileChange(e)}
          />
        </div>
        <div className="row">
          <div className="col-10">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => uploadSingleFile()}
            >
              Upload
            </button>
          </div>
        </div>
      </div>
      <div className="col-6">
        <div className="row">
          <div className="col-5">
            <label htmlFor="">Title</label>
            <input
              type="text"
              placeholder="Input Title"
              className="form-control"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="col-7">
            <div className="form-group">
              <label htmlFor="">Select Multiple Files</label>
              <input
                type="file"
                className="form-control"
                multiple
                onChange={(e) => MultipleFileChange(e)}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-10">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => uploadMultipleFiles()}
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUploadScreen;
