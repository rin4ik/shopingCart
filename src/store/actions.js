import axios from 'axios'
export const fetchNumber = ({ commit }, { min, max }) => {
    axios.get(`http://codetube.test/api/random?min=${min}&max=${max}`).then((response) => {
        commit('addRandomNumber', response.data.number);
    });
}