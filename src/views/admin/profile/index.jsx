import Banner from "./components/Banner";
import General from "./components/General";
import Notification from "./components/Notification";
import Project from "./components/Project";
import Storage from "./components/Storage";
import Upload from "./components/Upload";
import { Circles } from "react-loader-spinner";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const ProfileOverview = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="sm:[50%] relative mt-[14rem] w-full overflow-x-auto sm:rounded-lg md:w-full ">
          <div className="my-auto flex content-center justify-center ">
            <Circles
              height="45"
              width="45"
              color="#6f00ff"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        </div>
      ) : (
        <div className="flex w-full flex-col gap-5">
          <div className="w-ful mt-3 flex h-fit flex-col gap-5 lg:grid lg:grid-cols-12">
            <div className="col-span-4 lg:!mb-0">
              <Banner />
            </div>

            <div className="col-span-3 lg:!mb-0">
              <Storage />
            </div>

            <div className="z-0 col-span-5 lg:!mb-0">
              <Upload />
            </div>
          </div>
          {/* all project & ... */}

          <div className="grid h-full grid-cols-1 gap-5 lg:!grid-cols-12">
            <div className="col-span-5 lg:col-span-6 lg:mb-0 3xl:col-span-4">
              <Project />
            </div>
            <div className="col-span-5 lg:col-span-6 lg:mb-0 3xl:col-span-5">
              <General />
            </div>

            <div className="col-span-5 lg:col-span-12 lg:mb-0 3xl:!col-span-3">
              <Notification />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileOverview;
