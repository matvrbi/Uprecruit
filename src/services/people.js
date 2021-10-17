import PeopleClient from '@/clients/people'

const Service = {
    async getPeople() {
        return PeopleClient.getPeople();
    },

    async getPerson(personId) {
        return PeopleClient.getPerson(personId)
            .then((res) => {
                return res.data;
            });
    }
};

export default Service;