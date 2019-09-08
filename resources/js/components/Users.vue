<template>
    <div class="container">
    <div class="row mt-4">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Users List</h3>

          <div class="card-tools">

          </div>
        </div>
        <!-- /.box-header -->
        <div class="box-body table-responsive no-padding">
          <table class="table table-hover">
            <tbody><tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Type</th>
              <th>Modify</th>
            </tr>
            <tr>
              <td>183</td>
              <td>John Doe</td>
              <td>11-7-2014</td>
              <td><span class="badge badge-success">Approved</span></td>
              <td>
                 <a href="#" class="btn btn-info" title="Edit"> <i class="fa fa-user-edit white"></i> </a>
                 <a href="#" class="btn btn-danger" title="Delete"> <i class="fa fa-trash white"></i> </a>
                 <a href="#" class="btn btn-success" title="Published"> <i class="fa fa-arrow-up white"></i> </a>
                 <a href="#" class="btn btn-warning" title="Unpublished"> <i class="fa fa-arrow-down red"></i> </a>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
        <!-- /.box-body -->
      </div>
      <!-- /.box -->
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
