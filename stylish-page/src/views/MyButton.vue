<template>
    <a @click="callUsers(); this.adduser = false" class="waves-effect waves-light btn">Call Users</a>
    <a @click="countUsers(); this.adduser = false" class="waves-effect waves-light btn">
        <i class="material-icons left"></i>Count Users
    </a>
    <a @click="this.adduser = true" class="waves-effect waves-light btn">
        <i class="material-icons right"></i>Add User
    </a>
    <hr />
    <div v-if="adduser">
        <input type="text" placeholder="Name" name="name" v-model="name">
        <input type="text" placeholder="E-mail" name="email" v-model="email">
        <input type="text" placeholder="Country" name="country" v-model="country">
        <a @click="addUser" class="waves-effect waves-light btn">
            <i class="material-icons right"></i>Add User
        </a>
    </div>
    <pre>
            <ul>
                <li v-for="user in users" v-bind:key="user.id">
                    {{ user.name }}
                    {{ user.email }}
                </li>
            </ul>
    </pre>



</template>
<script>
import M from 'materialize-css'

export default {
    name: 'MyButton',
    data() {
        return {
            users: null,
            adduser: false,
            name: '',
            email: '',
        }
    },
    methods: {
        callUsers() {
            fetch("http://localhost:3333/customers")
                .then(resp => resp.json())
                .then(data => this.users = data.data)
        },
        countUsers() {
            M.toast(this.users.lenght,)

        },
        async addUser(e) {
            e.preventDefault();
            const data = {
                "name": this.name,
                "email": this.email,
            }

            const dataJson = JSON.stringify(data)
            const req = await fetch("http://localhost:3333/customers",
                {
                    method: "POST",
                    headers: { "Content-Type :" : "application/json" },
                    body: dataJson

                }
            )
            const res = await req.json(); 
            console.log(res);
        },
    },
}
</script>
