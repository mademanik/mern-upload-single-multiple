import React, { useEffect, useState } from "react";
import "./App.css";
import FileUploadScreen from "./screens/FileUploadScreen";
import { getSingleFiles, getMultipleFiles } from "./data/api";

function App() {
  const [singleFiles, setSingleFiles] = useState([]);
  const [multipleFiles, setMultipleFiles] = useState([]);

  const getSingleFilesList = async () => {
    try {
      const filesList = await getSingleFiles();
      setSingleFiles(filesList);
      console.log(singleFiles);
    } catch (error) {
      console.log(error);
    }
  };

  const getMultipleFilesList = async () => {
    try {
      const filesList = await getMultipleFiles();
      setMultipleFiles(filesList);
      console.log(multipleFiles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleFilesList();
    getMultipleFilesList();
  }, []);

  return (
    <>
      <div className="container">
        <h3 className="text-danger font-weight-bolder border-bottom text-center">
          Single and Multiple File Upload Using MERN
        </h3>
        <FileUploadScreen getSingle={() => getSingleFilesList()} getMulti={() => getMultipleFilesList()} />
      </div>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-6">
            <div className="text-success font-weight-bold">
              Single Files List
            </div>
            <div className="row">
              {singleFiles.map((file, index) => (
                <div className="col-6" key={file._id}>
                  <div className="card mb-2 border-0 p-0">
                    <img
                      src={`http://localhost:8080/${file.filePath}`}
                      height="150"
                      className="card-img-top img-responsive"
                      alt="img"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-6">
            {multipleFiles.map((element, index) => (
              <div key={element._id}>
                <h6 className="text-danger font-weight-bold">
                  {element.title}
                </h6>
                <div className="row">
                  {element.files.map((file, index) => (
                    <div className="col-6">
                      <div className="card mb-2 border-0 p-0">
                        <img
                          src={`http://localhost:8080/${file.filePath}`}
                          height="150"
                          className="card-img-top img-responsive"
                          alt="img"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
