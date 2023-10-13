import axios from "axios";
import { baseUrl } from "../config";
import { LOGGER, getUserToken, endSession } from "./index";

const baseURL = baseUrl;

export default () => {
    // const { access_token: token } = useSelector(state => state.authenticationReducers);
    const accessToken = getUserToken();

    const headers = {};

    if (accessToken) {
        headers.Authorization = `Token ${accessToken}`;
    }

    const axiosInstance = axios.create({
        baseURL,
        headers,
        timeout: 60000,
    });

    const requestHandler = (request) => {
        // Token will be dynamic so we can use any app-specific way to always
        // fetch the new token before making the call
        if (accessToken) request.headers.Authorization = `Token ${accessToken}`;
        return request;
    };

    const errorHandler = (error) => {
        // eslint-disable-next-line no-undef
        return Promise.reject(error);
    };

    axiosInstance.interceptors.request.use(
        (request) => {
            return requestHandler(request);
        },
        (error) => {
            errorHandler(error);
        }
    );

    axiosInstance.interceptors.response.use(
        (response) => {
            if (response.status === 204) {
                return { status: "success" };
            }
            return response.data;
        },
        async (err) => {
            console.log(err);
            const statusCode = err.response.status;
            if (statusCode === 400) {
                // credentials error
                return Promise.reject({
                    status: 400,
                    message: err?.response?.data?.message,
                });
            } else if (statusCode === 404) {
                // eNdpoint not found
                LOGGER(`Endpoint not existent: `, err.response.config.baseURL);
                return Promise.reject({
                    status: 404,
                    message: "Resource not found",
                });
            } else if (statusCode === 401 || statusCode === 403) {
                console.log({ err, statusCode });
                setTimeout(() => {
                    // push the url to the login page
                    window.location = "/auth/login";
                    // end session
                    endSession();
                }, 1000);
                return Promise.reject({ status: statusCode });
            } else {
                // Something went wrong with the server
                LOGGER(err.response.statusText);
                // return promise
                return Promise.reject({
                    status: err.response.statusCode,
                    message: err.response.statusText,
                });
            }
        }
    );

    return axiosInstance;
};
