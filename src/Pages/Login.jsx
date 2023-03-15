import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthContext } from "../Context/auth-context";

const Login = () => {
  const navigate = useNavigate();
  const { setIsAuth } = useAuthContext();
  return (
    <div className="flex justify-center bg-[#fff0f0] items-center w-full h-screen">
      <div className="flex items-center bg-[#ffd4d4] justify-around shadow-2xl dark:bg-neutral-700 rounded-lg bg-white ">
        <div className="hidden md:block h-1/2 w-1/2 p-4 ">
          <img
            src="assets/login.svg"
            className="h-full w-full bg-cover"
            alt="loginImage"
          />
        </div>
        <div className="p-3 m-1">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <div className=" flex justify-center">
              <div
                className="relative w-[5.625rem] cursor-pointer"
                onClick={() => navigate("/")}
              >
                <img src="assets/binksIcon.svg" alt="icon" />
                <div className="text-[0.75rem] font-[300] absolute top-[1.6rem] left-8">
                  Yours Truly
                </div>
              </div>
            </div>
            <h2 className="mt-4 text-2xl font-semibold text-center leading-9">
              Sign in to your account
            </h2>
          </div>
          <form
            className="mt-4 sm:mx-auto sm:w-full sm:max-w-md"
            onSubmit={async (e) => {
              e.preventDefault();
              const formdata = new FormData(e.target);
              try {
                const res = await axios.post(
                  "https://fakestoreapi.com/auth/login",
                  {
                    username: formdata.get("username"),
                    password: formdata.get("password"),
                  }
                );
                setIsAuth((prev) => ({
                  ...prev,
                  token: res?.data?.token,
                  userName: formdata.get("username"),
                  isLogin: true,
                  info: res?.data,
                }));
                localStorage.setItem("USER_TOKEN", res?.data?.token);
                localStorage.setItem("USER_NAME", "johnd");
                navigate("/");
                toast.success("Logged In Successfully");
              } catch (err) {
                toast.error("Invalid Credentials");
              }
            }}
          >
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-5"
              >
                Username
              </label>

              <div className="mt-1 rounded-md shadow-sm">
                <input
                  id="username"
                  type="text"
                  required
                  autoFocus
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  placeholder="johnd"
                  name="username"
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 leading-5 dark:text-white"
              >
                Password
              </label>

              <div className="mt-1 rounded-md shadow-sm">
                <input
                  id="password"
                  type="password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  name="password"
                  autoComplete="on"
                  placeholder="m38rmF$"
                />
              </div>
            </div>

            <div className="mt-2">
              <span className="block w-full rounded-md shadow-sm">
                <button
                  type="submit"
                  className="p-2 bg-green-500 w-full  text-sm font-bold text-white rounded-md hover:bg-green-400 "
                >
                  Sign in
                </button>
                <button
                  type="button"
                  className="mt-1 p-2 border-green-400 w-full  text-sm font-bold text-green-600 rounded-md border-2 bg-green-100"
                  onClick={async () => {
                    try {
                      const res = await axios.post(
                        "https://fakestoreapi.com/auth/login",
                        {
                          username: "johnd",
                          password: "m38rmF$",
                        }
                      );
                      setIsAuth((prev) => ({
                        ...prev,
                        token: res?.data?.token,
                        userName: "johnd",
                        isLogin: true,
                        info: res.data,
                      }));
                      localStorage.setItem("USER_TOKEN", res?.data?.token);
                      localStorage.setItem("USER_NAME", "johnd");
                      navigate("/");
                      toast.success("Logged in as Guest");
                    } catch (err) {
                      toast.error("Invalid Credentials");
                    }
                  }}
                >
                  Guest Login
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
