// src/api/api.js
import axios from 'axios';
import { Modal } from 'bootstrap';
import { API_ENDPOINTS } from './apiConfig';
// Toaster 
import { toastSuccess, toastError } from '../utils/toastUtils';
// Fetch the API base URL from the .env file
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
// console.log('API_BASE_URL',API_BASE_URL)
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Centralized function for handling API calls
const handleApiCall = async (method, url, data = null, headers = {}) => {
  try {
    const response = await api({ method, url, data, headers });
    // console.log('Response:', response.data.statusCode);
    if (response.data.statusCode === 401) {
      toastError(response.data.message);
      localStorage.removeItem('authToken');
      localStorage.removeItem('authId');
      localStorage.removeItem('subscriptionTargetDate');     
      setTimeout(() => (window.location.href = '/login'), 2000);
    } else {
      return response;
    }
  } catch (error) {
    if (error.response) {
      // Log and handle unauthorized access
      // console.error('Error Status:', error.response.status);
      if (error.response.statusCode === 401) {
        // console.log('Unauthorized:', error.response.data.message);
        toastError(error.response.data.message);
        localStorage.removeItem('authToken');
        localStorage.removeItem('authId');
        localStorage.removeItem('subscriptionTargetDate');
        setTimeout(() => (window.location.href = '/login'), 2000);
      }
      return error.response; // Return the server response error
    } else if (error.request) {
      return { status: 'error', message: 'No response from the server' };
    } else {
      return { status: 'error', message: error.message }; // Handle unexpected errors
    }
  }
};



// Login Student API
export const loginStudentApi = async (loginData) => {
  const { method, url } = API_ENDPOINTS.STUDENT_LOGIN;
  return await handleApiCall(method, url, loginData);
};

// Register Student API
export const registerStudentApi = async (studentData) => {
  const { method, url } = API_ENDPOINTS.STUDENT_REGISTER;
  return await handleApiCall(method, url, studentData);
};

// Get Student Grade API
export const getStudentGradeApi = async () => {
  const { method, url } = API_ENDPOINTS.STUDENT_GRADE_LIST;
  return await handleApiCall(method, url);
};

// Get Student Board API
export const getStudentBoardApi = async () => {
  const { method, url } = API_ENDPOINTS.STUDENT_BOARD_LIST;
  return await handleApiCall(method, url);
};

// forgot password API
export const forgotPasswordApi = async (email) => {
  const { method, url } = API_ENDPOINTS.FORGOT_PASSWORD;
  return await handleApiCall(method, url, email);
};

// reset password API
export const resetPasswordApi = async (id, resetpasswordData) => {
  const { method, url } = API_ENDPOINTS.RESET_PASSWORD;

  // Replace ':id' in the URL with the actual id value
  const finalUrl = url.replace(':id', id);

  return await handleApiCall(method, finalUrl, resetpasswordData);
};


// Get Student Profile Data API
export const get_student_profile_data_api = async () => {
 const authToken = localStorage.getItem('authToken');
  if (!authToken) {
    // toastError('Authentication token is missing.');
    setTimeout(() => (window.location.href = '/login'), 2000);
    return;
  }
  const headers = {
    Authorization: `Bearer ${authToken}`,
    'Content-Type': 'application/json',
  };
  const { method, url } = API_ENDPOINTS.STUDENT_PROFILE_DATA;
  return await handleApiCall(method, url, { token: authToken }, headers); // Pass token as payload if required
}

export const update_student_profile_image_api_old = async (imageData) => {
  const { method } = API_ENDPOINTS.STUDENT_PROFILE_IMAGE_UPDATE;
  // Retrieve the auth token and authId from local storage
  const authToken = localStorage.getItem('authToken');
  if (!authToken) {
    toastError('Authentication token is missing.');
    setTimeout(() => (window.location.href = '/login'), 2000);
    return;
  }
  const authId = localStorage.getItem('authId');

  // Construct the dynamic URL
  const url = `/students/${authId}/profile-image`;

  // Headers for the request
  const headers = {
    'Content-Type': 'application/json', // Ensure the API expects JSON
    Authorization: `Bearer ${authToken}`,
  };

  // Prepare the payload
  const payload = {
    student_profile_img: imageData, // Ensure `imageData` is correctly formatted as required by the API
  };

  // Call the centralized API handler
  return await handleApiCall(method, url, payload, headers);
};

export const update_student_profile_image_api = async (formData) => {
  const authId = localStorage.getItem('authId');
  const url = `/students/${authId}/profile-image`;  // The dynamic URL
  const authToken = localStorage.getItem('authToken');
  if (!authToken) {
    toastError('Authentication token is missing.');
    setTimeout(() => (window.location.href = '/login'), 2000);
    return;
  }
  
  const headers = {
    Authorization: `Bearer ${authToken}`,
    'Content-Type': 'multipart/form-data',
  };

  try {
    // Send the PUT request with FormData, Axios will handle the Content-Type automatically
    const response = await handleApiCall("PUT", url, formData, headers);
    return response;
  } catch (error) {
    console.error("Error in API call:", error);
    throw error;
  }
};


// Student subject list
export const get_Student_subject_list_api = async (studentData) => {
  const { method, url } = API_ENDPOINTS.STUDENT_SUBJECT_LIST;
  const authToken = localStorage.getItem('authToken');
  if (!authToken) {
    toastError('Authentication token is missing.');
    setTimeout(() => (window.location.href = '/login'), 2000);
    return;
  }
  const headers = {
    Authorization: `Bearer ${authToken}`,
    'Content-Type': 'application/json',
  };
  return await handleApiCall(method, url, studentData,headers);
};


export const get_Student_subject_syllabus_list_api = async (studentData) => {
  const { method, url } = API_ENDPOINTS.STUDENT_SUBJECT_SYLLABUS_LIST;
  const authToken = localStorage.getItem("authToken");
  if (!authToken) {
    toastError("Authentication token is missing.");
    return;
  }

  const headers = {
    Authorization: `Bearer ${authToken}`,
  };

  // Convert JSON data to FormData
  const formData = new FormData();
  formData.append("boardId", studentData.boardId);
  formData.append("gradeId", studentData.gradeId);
  formData.append("subjectId", studentData.subject_id);

  // Make the API call
  return await handleApiCall(method, url, formData, headers);
};


export const studentLoginActivityApi = async () => {
  const authId = localStorage.getItem('authId');
  const { method, url } = API_ENDPOINTS.STUDENT_LOGIN_ACTIVITY;
  const authToken = localStorage.getItem('authToken');

  // Check if the required token exists
  if (!authToken) {
    toastError('Authentication token is missing.');
    setTimeout(() => (window.location.href = '/login'), 2000);
    return;
  }

  // Create a FormData object and append the student_id
  const formData = new FormData();
  formData.append('student_id', authId);

  const headers = {
    Authorization: `Bearer ${authToken}`,
  };

  // Make API call
  return await handleApiCall(method, url, formData, headers);
};



export const studentLogoutApiold = async () => {
  const { method, url } = API_ENDPOINTS.STUDENT_LOGOUT;
  const authToken = localStorage.getItem('authToken');
  const authId = localStorage.getItem('authId');
  
  if (!authToken) {
    toastError('Authentication token is missing.');
    setTimeout(() => (window.location.href = '/login'), 2000);
    return;
  }
  // Create a FormData object and append the student_id
  const formData = new FormData();
  formData.append('student_id', authId);
  
  const headers = {
    Authorization: `Bearer ${authToken}`,
    'Content-Type': 'application/json',
  };
  try {
    const response = await handleApiCall(method, url, { token: authToken, formData }, headers); // Pass token as payload if required
    if (response.status === 201) {
      // Programmatically close the modal
      const logoutModal = document.getElementById('logoutModal');
      const modalInstance = Modal.getInstance(logoutModal);
      modalInstance?.hide();
      toastSuccess('Logout successful!');
      localStorage.removeItem('authToken');
      localStorage.removeItem('authId');
      localStorage.removeItem('subscriptionTargetDate');
      // setTimeout(() => (window.location.href = '/login'), 2000);
    } else {
      // Programmatically close the modal
      const logoutModal = document.getElementById('logoutModal');
      const modalInstance = Modal.getInstance(logoutModal);
      modalInstance?.hide();
      toastSuccess('Logout successful!');
      localStorage.removeItem('authToken');
      localStorage.removeItem('authId');
      localStorage.removeItem('subscriptionTargetDate');
      // setTimeout(() => (window.location.href = '/login'), 2000);
    }
  } catch (error) {
    console.error('Logout API error:', error);
    toastError('Something went wrong. Please try again.');
  }
};

export const country_list = async () => {
    const {method , url} = API_ENDPOINTS.COUNTRY_LIST;
    // Make the API call
    return await handleApiCall(method, url);
};

export const state_list = async (state_data) => {
    const {method , url} = API_ENDPOINTS.STATE_LIST;
    // Make the API call
    return await handleApiCall(method, url, state_data);
};

export const city_list = async (city_data) => {
    const {method , url} = API_ENDPOINTS.CITY_LIST;
    // Make the API call
    return await handleApiCall(method, url, city_data);
};

export const school_filter = async (filters) => {
  const { method, url } = API_ENDPOINTS.SCHOOL_FILTER;

  // Build the query string from the filters object
  const queryString = new URLSearchParams(filters).toString();

  // Final URL
  const finalUrl = `${url}?${queryString}`;

  // Make the API call
  return await handleApiCall(method, finalUrl);
};

export const school_create = async (school_data) => {
  const {method , url} = API_ENDPOINTS.SCHOOL_CREATE;
  // Make the API call
  return await handleApiCall(method, url, school_data);
};

// reward point mail
export const reward_point_mail = async (mail_data) => {
  const { method, url } = API_ENDPOINTS.REWARD_POINT_MAIL;
  return await handleApiCall(method, url, mail_data);
};



export const studentLogoutApi = async () => {
  const { method, url } = API_ENDPOINTS.STUDENT_LOGOUT;
  const authToken = localStorage.getItem('authToken');
  const authId = localStorage.getItem('authId');
  
  if (!authToken) {
    toastError('Authentication token is missing.');
    setTimeout(() => (window.location.href = '/login'), 2000);
    return;
  }

  // Prepare the data to send as a JSON object
  const data = {
    student_id: authId,
  };
  
  const headers = {
    Authorization: `Bearer ${authToken}`,
    'Content-Type': 'application/json',  // Send as JSON
  };

  try {
    const response = await handleApiCall(method, url, data, headers); // Pass data (not formData) as payload
    // console.log('Logout response:', response.data.statusCode);
    if (response.data.statusCode === 201 || response.data.statusCode === 401) {
      // Programmatically close the modal
      const logoutModal = document.getElementById('logoutModal');
      const modalInstance = Modal.getInstance(logoutModal);
      modalInstance?.hide();
      toastSuccess('Logout successful!');
      localStorage.removeItem('authToken');
      localStorage.removeItem('authId');
      localStorage.removeItem('subscriptionTargetDate');
      // Optionally redirect to login
      setTimeout(() => (window.location.href = '/login'), 2000);
    } 
    
    else {
      toastError('Logout failed.');
    }
  } catch (error) {
    console.error('Logout API error:', error);
    toastError('Something went wrong. Please try again.');
  }
};



export default api;
