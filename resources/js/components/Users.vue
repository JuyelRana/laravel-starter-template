<template>

  <div class="container">

    <div class="row mt-4" v-if="$gate.isAdmin()">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Users List</h3>

            <div class="card-tools">
              <button class="btn btn-success" @click="newModal()">
                Add New <i class="fas fa-user-plus fa-fw"></i>
              </button>
            </div>
          </div>
          <!-- /.box-header -->
          <div class="box-body table-responsive no-padding">
            <table class="table table-hover">
              <tbody class="text-center">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Type</th>
                  <th>Registered At</th>
                  <th>Modify</th>

                </tr>
                <tr v-for="user in users" :key="user.id">
                  <td>{{ user.id }}</td>
                  <td>{{ user.name }}</td>
                  <td>{{ user.email }}</td>
                  <td>{{user.type | firstLetterUpperCase}}</td>
                  <td>{{user.created_at | diffDate}}</td>
                  <td>
                    <a href="#" class="btn btn-info" title="Edit" @click="editModal(user)"><i class="fa fa-user-edit white"></i></a>
                    <a href="#" class="btn btn-danger" title="Delete" @click="deleteUser(user.id)"><i class="fa fa-trash white"></i></a>
                    <a href="#" class="btn btn-success" title="Published"> <i class="fa fa-arrow-up white"></i> </a>
                    <a href="#" class="btn btn-warning" title="Unpublished"> <i class="fa fa-arrow-down red"></i> </a>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
          <!-- /.card-body -->
        </div>
        <!-- /.card -->
      </div>
    </div>

    <!-- if not an admin it will shows 404 error page -->
    <div v-if="!$gate.isAdmin()">
      <not-found></not-found>
    </div>
    <!-- if not an admin it will shows 404 error page -->

    <!-- Modal -->
    <div class="modal fade" id="addNewModal" tabindex="-1" role="dialog" aria-labelledby="addNewLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-center" id="addNewLabell" v-show="editmode">Update User's Info</h5>
            <h5 class="modal-title text-center" id="addNewLabel" v-show="!editmode">Add New User</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <form @submit.prevent="editmode ? updateUser() : createUser()">
            <div class="modal-body">

              <div class="form-group">
                <input v-model="form.name" type="text" name="name" placeholder="Juyel Rana" class="form-control" :class="{ 'is-invalid': form.errors.has('name') }">
                <has-error :form="form" field="name"></has-error>
              </div>

              <div class="form-group">
                <input v-model="form.email" type="email" name="email" placeholder="juyel@gmail.com" class="form-control" :class="{ 'is-invalid': form.errors.has('email') }">
                <has-error :form="form" field="email"></has-error>
              </div>

              <div class="form-group">
                <textarea v-model="form.bio" name="bio" id="bio" placeholder="Short bio for user (Optional)" class="form-control" :class="{ 'is-invalid': form.errors.has('bio') }"></textarea>
                <has-error :form="form" field="bio"></has-error>
              </div>

              <div class="form-group">
                <select v-model="form.type" name="type" id="type" class="form-control" :class="{ 'is-invalid': form.errors.has('type') }">
                  <option value="">Select User Role</option>
                  <option value="admin">Admin</option>
                  <option value="user">Standard User</option>
                  <option value="author">Author</option>
                </select>
                <has-error :form="form" field="type"></has-error>
              </div>

              <div class="form-group">
                <input v-model="form.password" type="password" name="password" id="password" class="form-control" :class="{ 'is-invalid': form.errors.has('password')}" placeholder="********">
                <has-error :form="form" field="password"></has-error>
              </div>

            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              <button type="submit" v-show="editmode" class="btn btn-success">Update</button>
              <button type="submit" v-show="!editmode" class="btn btn-primary">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import HasError from 'vform/src/components/HasError'

export default {
  components: {
    HasError
  },

  data() {
    return {
      editmode: false,
      users: {},
      form: new Form({
        id: '',
        name: '',
        email: '',
        password: '',
        type: '',
        bio: '',
        photo: ''
      })
    }
  },

  methods: {
    //Update the user data
    updateUser() {
      this.$Progress.start()
      // console.log("Edit")
      this.form.put('api/user/' + this.form.id)
      .then(() => {
        // If user info updated, hide the updated modal
        $('#addNewModal').modal('hide')

        toast.fire({
          type: 'success',
          title: 'User updated successfully!'
        })

        //Refresh the table
        Fire.$emit('AfterCreate')

        // this.$Progress.end();
      })
      .catch(() => {
        this.$Progress.fail()

        toast.fire({
          type: 'error',
          title: 'User not updated!'
        })
      })
    },

    // open edit form modal window
    editModal(user) {
      //To ensure edit modal
      this.editmode = true

      //first reset the form
      this.form.clear()

      //Show the add-new-user modal
      $('#addNewModal').modal('show')

      //Automatically fill the edit form date
      this.form.fill(user)
    },

    // Open New Modal
    newModal() {
      //To ensure addNewModal modal
      this.editmode = false

      //first reset the form
      this.form.reset()

      //Show the add-new-user modal
      $('#addNewModal').modal('show')
    },

    //Delete a user
    deleteUser(id) {

      swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
      .then((result) => {
        // Send request to the server
        if (result.value) {

          this.form.delete('api/user/'+id).then( (response) =>{
            if(response.data.status == 'success')
            {
              swal.fire(
                'Deleted!',
                response.data.msg,
                response.data.status
              )

              Fire.$emit('AfterCreate');

            }

          }).catch( () => {
            swal.fire("Failed!", "User not deleted!!", "error");
          });
        }
      })
    },
    //Get all users data form server
    loadUsers() {
      // if current user is admin only then send the http request
      if(this.$gate.isAdmin()){
        axios.get('api/user').then(({ data }) => (this.users = data.data));
      }
    },
    // Create a new user
    createUser() {
      this.$Progress.start()

      this.form
      .post('api/user')
      .then(() => {
        Fire.$emit('AfterCreate')
        $('#addNewModal').modal('hide')

        toast.fire({
          type: 'success',
          title: 'User created successfully!'
        })
      })
      .catch(() => {
        toast.fire({
          type: 'error',
          title: 'User not created!'
        })
      })

      this.$Progress.finish()
      // this.loadUsers();
    }
  },
  created() {
    this.loadUsers()
    // After Every 3 seconds loadUsers() function will triggered
    // setInterval(() => this.loadUsers(), 3000);
    Fire.$on('AfterCreate', () => {
      this.loadUsers()
    })
  }
}
</script>
