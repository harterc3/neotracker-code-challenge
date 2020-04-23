import axios from 'axios';

export async function get({ pageSize, page, sortBy, sortDescending, filterText }) {
  const sortOrder = sortDescending ? 'desc' : 'asc';
  const response = await axios.get(`http://localhost:3001/shipments/?_limit=${pageSize}&_page=${page}&_sort=${sortBy}&_order=${sortOrder}&q=${filterText}`);
  return response.data;
}

export async function getDetail(id) {
  const response = await axios.get(`http://localhost:3001/shipments/${id}/`);
  return response.data;
}

export async function put(id, data) {
  const response = await axios.put(`http://localhost:3001/shipments/${id}`, data);
  return response.data;
}
