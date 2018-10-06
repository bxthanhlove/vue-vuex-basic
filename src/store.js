import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        registrations: [],
        users: [
            { id: 1, name: 'Max', registered: false },
            { id: 2, name: 'Anna', registered: false },
            { id: 3, name: 'Chris', registered: false },
            { id: 4, name: 'Sven', registered: false }
        ]
    },
    getters: {
        unregisteredUsers(state) {
            return state.users.filter(x => x.registered == false);
        },
        registrations(state) {
            return state.registrations;
        },
        totalRegistrations(state) {
            return state.registrations.length;
        },
        getNextUserId(state) {
            const arrayUsersTemp = [];
            state.users.forEach(x => {
                arrayUsersTemp.push(x.id);
            });
            return Math.max(...arrayUsersTemp) + 1;
        }
    },
    mutations: {
        addUser(state, user) {
            state.users.unshift(user);
        },
        register(state, user) {
            //Cập nhật trạng thái đã đăng ký trong user
            const userStore = state.users.find(x => x.id == user.id);
            userStore.registered = true;
            const date = new Date;
            var registration = { userId: user.id, name: user.name, date: date.getMonth() + '/' + date.getDay() };
            state.registrations.push(registration);
        },
        unregister(state, payload) {
            const registration = payload.registration;
            const userStore = state.users.find(x => x.id == registration.userId);
            userStore.registered = false;
            state.registrations.splice(state.registrations.findIndex(x => x.userId == registration.userId), 1);
        },
        checkExistUser(state, userName) {

        },
    },
    actions: {
        checkExistUser(context, userName) {
            var result = true;
            var userStore = context.state.users.find(x => x.name.toLowerCase() == userName.toLowerCase());
            if (!userStore) {
                result = false;
            }
            return result;
        },
        addUser(context, user) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    context.commit('addUser', user);
                    resolve();
                }, 1000)
            })
        },
        register(context, user) {
            setTimeout(() => {
                context.commit('register', user);
            }, 1000)
        }
    }
});