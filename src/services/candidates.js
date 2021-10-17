import CandidatesClient from '@/clients/candidates'

const Service = {
    async getCandidates() {
        return CandidatesClient.getCandidates();
    },

    async getDriver(candidateId) {
        return CandidatesClient.getDriver(candidateId)
            .then((res) => {
                return res.data;
            });
    }
};

export default Service;