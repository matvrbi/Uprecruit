import axios from "axios";

const Client = {
    getCandidates() {
        let promises = [];
        let results = [];
        for (let i = 0; i < 6; i++) {
            let promise = axios.get(`/fixtures/candidate_${i + 1}.json`)
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
    getDriver(candidateId) {
        return axios.get(`/fixtures/candidate_${candidateId}.json`);
    }
};

export default Client;