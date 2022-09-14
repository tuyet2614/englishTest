import vocab from "../constant/http-link"

const getAll = (id) => {
    return vocab.get(`/dashboard/${id}/vocabulary`);
};
const create = (id, data) => {
    return vocab.post(`/dashboard/${id}/vocabulary`, data);
};
const update = (id, idItem, data) => {
    return vocab.put(`/dashboard/${id}/vocabulary/${idItem}`, data);
};
const remove = (id, idItem) => {
    return vocab.delete(`/dashboard/${id}/vocabulary/${idItem}`);
};
const getItem = (id, idItem) => {
    return vocab.get(`/dashboard/${id}/vocabulary/${idItem}`)
}


const listVocabService = {
    getAll,
    create,
    update,
    remove,
    getItem
};
export default listVocabService;