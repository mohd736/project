// // src/services/studentService.js
// import axios from 'axios';

// const API_URL = 'http://localhost:8080/api/v1/student';

// class StudentService {
//   getStudents() {
//     return axios.get(API_URL);
//   }

//   getStudentById(id) {
//     return axios.get(`${API_URL}/${id}`);
//   }

//   createStudent(student) {
//     return axios.post(API_URL, student);
//   }

//   updateStudent(id, student) {
//     return axios.put(`${API_URL}/${id}`, student);
//   }

//   deleteStudent(id) {
//     return axios.delete(`${API_URL}/${id}`);
//   }
// }

// const studentService = new StudentService();
// export default studentService;

import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/v1/student';

export const studentList = () => axios.get(REST_API_BASE_URL);

export const createStudent = (student) => axios.post(REST_API_BASE_URL, student);

export const getStudent = (studentId) => axios.get(REST_API_BASE_URL+'/'+studentId);

export const updateStudent = (studentId, student) => axios.put(REST_API_BASE_URL+'/'+studentId, student);

export const deleteStudent = (studentId) => axios.delete(REST_API_BASE_URL+'/'+studentId);
