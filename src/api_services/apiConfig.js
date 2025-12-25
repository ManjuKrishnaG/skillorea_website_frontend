export const API_ENDPOINTS = {
    STUDENT_LOGIN: {
      url: '/student/login',
      method: 'POST',
    },

    STUDENT_REGISTER: {
      url: '/student/register',
      method: 'POST',
    },

    STUDENT_GRADE_LIST: {
      url: '/utils/grade/list',
      method: 'GET',
    },
    
    STUDENT_BOARD_LIST: {
      url: '/utils/student_board/list',
      method: 'GET',
    },

    FORGOT_PASSWORD:{
      url: '/forgotPassword',
      method: 'POST',
    },

    RESET_PASSWORD:{
      url: '/resetPassword/:id',
      method: 'POST',
    },

    STUDENT_PROFILE_DATA:{
      url: '/student/profile',
      method: 'GET',
    },

    STUDENT_PROFILE_IMAGE_UPDATE:{
      // url: '/student/profile',
      method: 'PUT',
    },

    STUDENT_SUBJECT_LIST:{
      url: '/subjects/get-subjects',
      method: 'POST',
    },
    
    STUDENT_SUBJECT_SYLLABUS_LIST: {
      url: "/chapters",
      method: "POST",
    },

    STUDENT_LOGIN_ACTIVITY:{
       url: "/student-login-activity",
       method: "POST",
    },

    COUNTRY_LIST:{
       url: "/utils/country/list",
       method: "GET",
    },  

    STATE_LIST:{
       url: "/utils/state/list",
       method: "POST",
    },  

    CITY_LIST:{
       url: "/utils/city/list",
       method: "POST",
    }, 

    SCHOOL_CREATE:{
       url:"/school/create",
       method:"POST"
    },
    
    SCHOOL_FILTER: {
      url: "/school/filter",
      method: "GET",
   },

   REWARD_POINT_MAIL:{
      url: "/submit-test",
      method: "POST",
   },
   
   STUDENT_LOGOUT:{
      url: '/student/logout',
      method: 'POST',
    }
  };
  