import vocab from '../constant/http-link';

const getAll = () => {
  return vocab.get('/score');
};
const create = data => {
  return vocab.post('/score', data);
};
const update = (id, data) => {
  return vocab.put(`/score/${id}`, data);
};
const remove = id => {
  return vocab.delete(`/score/${id}`);
};
const getItem = id => {
  return vocab.get(`/score/${id}`);
};

const dashboardService = {
  getAll,
  create,
  update,
  remove,
  getItem,
};
export default dashboardService;
