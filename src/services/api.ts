import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const userApi = {
  getUsers: () => api.get('/users'),
  createUser: (data: any) => api.post('/users', data),
  updateUser: (id: string, data: any) => api.put(`/users/${id}`, data),
  deleteUser: (id: string) => api.delete(`/users/${id}`),
};

export const classApi = {
  getClasses: () => api.get('/classes'),
  createClass: (data: any) => api.post('/classes', data),
  updateClass: (id: string, data: any) => api.put(`/classes/${id}`, data),
  deleteClass: (id: string) => api.delete(`/classes/${id}`),
};

export const attendanceApi = {
  getAttendance: (classId: string, date: string) => 
    api.get(`/attendance?classId=${classId}&date=${date}`),
  markAttendance: (data: any) => api.post('/attendance', data),
};

export const feeApi = {
  getFees: (studentId: string) => api.get(`/fees?studentId=${studentId}`),
  createFee: (data: any) => api.post('/fees', data),
  updateFee: (id: string, data: any) => api.put(`/fees/${id}`, data),
};