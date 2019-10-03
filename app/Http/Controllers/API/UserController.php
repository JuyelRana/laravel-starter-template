<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
  public function __construct()
  {
    $this->middleware('auth:api');
  }

  public function index()
  {
    return User::latest()->paginate(10);
  }


  public function store(Request $request)
  {
    $this->validate($request, [
      'name' => 'required|string|max:191',
      'email' => 'required|string|email|max:191|unique:users',
      'password' => 'required|string|min:6'
    ]);

    return User::create([
      'name' => $request['name'],
      'email' => $request['email'],
      'type' => $request['type'],
      'bio' => $request['bio'],
      'photo' => $request['photo'],
      'password' => Hash::make($request['password']),
    ]);
  }


  public function show($id)
  {
    //
  }

  public function update(Request $request, $id)
  {
    $user = User::findOrFail($id);

    $this->validate($request,[
      'name' => 'required|string|max:191',
      'email' => 'required|string|email|max:191|unique:users,email,'.$user->id,
      'password' => 'sometimes|required|min:6'
    ]);

    if(!empty($request->password)){
      $request->merge(['password' => Hash::make($request['password'])]);
    }

    $user->update($request->all());

    return ['message' => 'Updated the user info!'];
  }

  public function profile()
  {
    return auth('api')->user();
  }

  public function updateProfile(Request $request)
  {
    //get loged in user information
    $user = auth('api')->user();

    // check the validation to user updated data
    $this->validate($request,[
      'name' => 'required|string|max:191',
      'email' => 'required|string|email|max:191|unique:users,email,'.$user->id,
      'password' => 'sometimes|required|min:6'
    ]);


    // Loged in user photo
    $currentPhoto = $user->photo;

    if($request->photo != $currentPhoto){

      //produce image name to save database and store in a folder
      $name = time().'.' . explode('/', explode(':', substr($request->photo, 0, strpos($request->photo, ';')))[1])[1];

      // save image to the specific folder
      \Image::make($request->photo)->save(public_path('img/profile/').$name);

      //Photo field have to change with new value
      $request->merge(['photo'=>$name]);

    }

    if(!empty($request->password)){
      $request->merge(['password' => Hash::make($request['password'])]);
    }

    //Update user value to database
    $user->update($request->all());

    return ['message' => "Success"];
  }

  /**
  * Remove the specified resource from storage.
  *
  * @param int $id
  * @return \Illuminate\Http\Response
  */
  public function destroy($id)
  {
    //get loged in user
    $current_user = auth('api')->user();

    $user = User::findOrFail($id);

    if($current_user->id != $user->id){
      //delete the user
      $user->delete();

      return response()->json([
        'status' => 'success',
        'msg' => "User successfully deleted!!",
        'code' => 200,
      ]);

      // return ['message' => 'User Deleted!'];
    }else {
      return response()->json([
        'status' => 'error',
        'msg' => "User not deleted!!",
        'code' => 400,
      ], 400);
    }

  }
}
