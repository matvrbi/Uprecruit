import axios from "axios";

const Client = {
    getPeople() {
        let promises = [];
        let results = [];
        for (let i = 0; i < 6; i++) {
            let promise = axios.get(`/fixtures/person_${i + 1}.json`)
                .then((result) => {
                    results.push(result.data);
                });
            promises.push(promise);
        }
        return Promise.all(promises)
            .then(() => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(results);
                    }, 2000);
                })
            });
    },
    getPerson(personId) {
        return axios.get(`/fixtures/person_${personId}.json`);
    }
};

export default Client;