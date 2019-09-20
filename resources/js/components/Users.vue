<template>
    <div class="container">
        <div class="row mt-4">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Users List</h3>

                        <div class="card-tools">
                            <button class="btn btn-success" data-toggle="modal" data-target="#addNewModal">
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
                                <th>Modify</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Juyel Rana</td>
                                <td>mjuyelrana@gmail.com</td>
                                <td><span class="badge badge-success">Approved</span></td>
                                <td>
                                    <a href="#" class="btn btn-info" title="Edit"> <i class="fa fa-user-edit white"></i>
                                    </a>
                                    <a href="#" class="btn btn-danger" title="Delete"> <i class="fa fa-trash white"></i>
                                    </a>
                                    <a href="#" class="btn btn-success" title="Published"> <i
                                        class="fa fa-arrow-up white"></i> </a>
                                    <a href="#" class="btn btn-warning" title="Unpublished"> <i
                                        class="fa fa-arrow-down red"></i> </a>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Juyel Rana</td>
                                <td>mjuyelrana@gmail.com</td>
                                <td><span class="badge badge-success">Approved</span></td>
                                <td>
                                    <a href="#" class="btn btn-info" title="Edit"> <i class="fa fa-user-edit white"></i>
                                    </a>
                                    <a href="#" class="btn btn-danger" title="Delete"> <i class="fa fa-trash white"></i>
                                    </a>
                                    <a href="#" class="btn btn-success" title="Published"> <i
                                        class="fa fa-arrow-up white"></i> </a>
                                    <a href="#" class="btn btn-warning" title="Unpublished"> <i
                                        class="fa fa-arrow-down red"></i> </a>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Juyel Rana</td>
                                <td>mjuyelrana@gmail.com</td>
                                <td><span class="badge badge-success">Approved</span></td>
                                <td>
                                    <a href="#" class="btn btn-info" title="Edit"> <i class="fa fa-user-edit white"></i>
                                    </a>
                                    <a href="#" class="btn btn-danger" title="Delete"> <i class="fa fa-trash white"></i>
                                    </a>
                                    <a href="#" class="btn btn-success" title="Published"> <i
                                        class="fa fa-arrow-up white"></i> </a>
                                    <a href="#" class="btn btn-warning" title="Unpublished"> <i
                                        class="fa fa-arrow-down red"></i> </a>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Juyel Rana</td>
                                <td>mjuyelrana@gmail.com</td>
                                <td><span class="badge badge-danger">Rejected</span></td>
                                <td>
                                    <a href="#" class="btn btn-info" title="Edit"> <i class="fa fa-user-edit white"></i>
                                    </a>
                                    <a href="#" class="btn btn-danger" title="Delete"> <i class="fa fa-trash white"></i>
                                    </a>
                                    <a href="#" class="btn btn-success" title="Published"> <i
                                        class="fa fa-arrow-up white"></i> </a>
                                    <a href="#" class="btn btn-warning" title="Unpublished"> <i
                                        class="fa fa-arrow-down red"></i> </a>
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

        <!-- Modal -->
        <div class="modal fade" id="addNewModal" tabindex="-1" role="dialog" aria-labelledby="addNewLabel"
             aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-center" id="addNewLabel">Add New User</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
