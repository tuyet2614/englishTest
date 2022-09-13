import vocab from "../constant/http-link"

const getAll = () => {
    return vocab.get("/dashboard");
};
const create = data => {
    return vocab.post("/dashboard", data);
};
const update = (id, data) => {
    return vocab.put(`/dashboard/${id}`, data);
};
const remove = id => {
    return vocab.delete(`/dashboard/${id}`);
};
const getItem = id => {
    return vocab.get(`/dashboard/${id}`)
}


const vocabService = {
    getAll,
    create,
    update,
    remove,
    getItem
};
export default vocabService;